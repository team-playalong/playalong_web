var TickSnd = new buzz.sound('http://victorblog.com/metronome/snd/tick', {
    formats: ['mp3', 'ogg', 'wav']
});
TickSnd.load();

// Old school image preload; CSS background image sprite
// not available for ON button with this responsive slice
(new Image()).src = 'http://victorblog.com/metronome/img/toggle_btn_depressed.jpg';

/**
 * MetronomeApp module.
 */
var MetronomeApp = angular.module('MetronomeApp', [], function() {});

/**
 * metronome directive helps with responsive design,
 * keeps metronome in full view at all times.
 */
MetronomeApp.directive('metronome', function($window) {
    return function(scope, elem) {
        var $jqWindow = $($window);
        var metronomeAspectRatio = 0.56;
        var fillPercentOfWindow = 0.98;
        $jqWindow.resize(function() {
            // Window wider
            var windowAR = $jqWindow.width() / $jqWindow.height();
            if (windowAR > metronomeAspectRatio) {
                elem.height($jqWindow.height() * fillPercentOfWindow);
                elem.width(metronomeAspectRatio * elem.height());
                // Window taller
            } else {
                elem.width($jqWindow.width() * fillPercentOfWindow);
                elem.height(elem.width() / metronomeAspectRatio);
            }
        }).resize();
    };
});

/**
 * bobDragRegion directive; the jQuery UI slider that
 * contains the click-and-drag slideable bob.
 */
MetronomeApp.directive('bobDragRegion', function() {
    return function(scope, elem, attrs) {
        var bobElem = elem.find('[bob]');
        if (!bobElem.length) {
            throw "bobDragRegion couldn't find bob element.";
        }

        var minSliderValue = scope.minBpm;
        var maxSliderValue = scope.maxBpm;

        // Translation functions required since jQuery
        // slider's orientation is inverted with respect to
        // this old fashioned metronome
        var bpmToSliderValue = function(bpm) {
            return maxSliderValue - bpm + minSliderValue;
        };
        var sliderValueToBpm = function(value) {
            return maxSliderValue - value + minSliderValue;
        };

        bobElem.addClass('ui-slider-handle');
        elem.slider({
            min: minSliderValue,
            max: maxSliderValue,
            orientation: 'vertical',
            value: bpmToSliderValue(scope.bpm),
            change: function(e, ui) {
                var change = function() {
                    scope.bpm = sliderValueToBpm(ui.value);
                };

                // Sometimes AngularJS is already in a digest when
                // jQuery UI slider change is called, such as the
                // "change" on init
                scope.$$phase == '$digest' ? change() : scope.$apply(change);
            },
            start: function(e, ui) {
                // During dragging, don't use CSS transition
                // (conflicts with plugin), use plugin's animation.
                // We want the bob to move smoothly independent of
                // the plugin, such as when BPM is manually entered
                // and the plugin value is set via plugin API,
                // so CSS transition takes care of that case.
                bobElem.css('transition', 'none');
                bobElem.css('-webkit-transition', 'none');
                bobElem.css('-moz-transition', 'none');
                bobElem.css('-o-transition', 'none');
                elem.slider('option', 'animate', 500);
            },
            stop: function(e, ui) {
                bobElem[0].style.webkitTransition = null;
                elem.slider('option', 'animate', false);
            },
            slide: function() {
                // Keep scope up to date with bob as it is dragged
                scope.$apply(function() {
                    var sliderValue = elem.slider('option', 'value');
                    scope.bpm = sliderValueToBpm(sliderValue);
                });
            }
        });

        // Keep bob up to date with scope
        scope.$watch('bpm', function(bpm) {
            if (scope.bpmInRange()) {
                elem.slider('option', 'value', bpmToSliderValue(bpm));
            }
        });
    };
});

/**
 * bpmError directive helps with responsive font size.
 */
MetronomeApp.directive('bpmError', function($window) {
    return function(scope, elem) {
        var $jqWindow = $($window);
        $jqWindow.resize(function() {
            elem.css('font-size', elem.height() + 'px');
        });

        // Do it on DOM ready to initialize display properly
        // (since font size depends on element height)
        $(function() {
            $jqWindow.resize();
        });
    };
});

var MetronomeCtrl = function($scope, $timeout) {
    var self = this;
    self.$scope = $scope;
    self.$timeout = $timeout;
    self.timeoutPromises = [];

    $scope.bpm = 120;
    $scope.minBpm = 40;
    $scope.maxBpm = 208;

    angular.forEach([
        'toggleMetronome',
        'getWandSwingTransitionDuration',
        'bpmInRange',
        'getInputErrorText'
        ], function(funcName) {
        $scope[funcName] = $.proxy(self[funcName], self);
    });

    $scope.handleBpmChange = function(bpm) {
      // milliseconds per beat
      $scope.beatMs = 1 / (bpm / 60 / 1000);

      // BPM out of range
      if (!self.bpmInRange()) {
          self.stop();

          var validator = $scope.bpm < $scope.minBpm ? 'min' : 'max';
          $scope.metronomeForm.bpm.$setValidity(validator, false);
      }
      else {
        if (!!$scope.metronomeForm)
        {
          $scope.metronomeForm.bpm.$setValidity('min', true);
          $scope.metronomeForm.bpm.$setValidity('max', true);
        }
          
      }
    };
    $scope.handleBpmChange(120);
};

MetronomeCtrl.prototype.toggleMetronome = function() {
    this.$scope.started ? this.stop() : this.start();
};

MetronomeCtrl.prototype.stop = function() {
    var self = this;
    self.$scope.started = false;
    self.$scope.swingLeft = false;
    self.$scope.swingRight = false;
    self.$scope.swingToCenter = true;

    // Purge pending timeouts
    angular.forEach(this.timeoutPromises, function(timeoutProm) {
        self.$timeout.cancel(timeoutProm);
    });
    this.timeoutPromises = [];
};

MetronomeCtrl.prototype.start = function() {
    var self = this;

    if (self.bpmInRange()) {
        self.$scope.started = true;
        self.$scope.swingLeft = true;
        self.$scope.swingRight = false;
        self.$scope.swingToCenter = false;
        self.$scope.firstBeat = true;

        // The first beat does not have a sound; it is the wand
        // moving from center position to an edge
        self.timeoutPromises.push(self.$timeout(function() {
            self.$scope.firstBeat = false;
            self.$scope.started && self.beat();
        }, self.getBeatMs()));
    }
};

MetronomeCtrl.prototype.beat = function() {
    var self = this;

    self.$scope.swingLeft = !self.$scope.swingLeft;
    self.$scope.swingRight = !self.$scope.swingRight;

    TickSnd.setVolume(80 + Math.random() * 20);

    // At very fast tempos, the sound must be stopped before
    // playing again
    !TickSnd.isPaused() && TickSnd.stop();
    TickSnd.play();

    self.timeoutPromises.push(self.$timeout(function() {
        self.$scope.started && self.beat();
    }, self.getBeatMs()));
};

MetronomeCtrl.prototype.getWandSwingTransitionDuration = function() {
    // If swinging to center due to user entering an
    // invalid value while metronome ON, use a generic 1.5s
    // return to center time; otherwise use a transition
    // speed based on the current BPM
    return this.$scope.swingToCenter && !this.bpmInRange() ? '1.5s' : this.getBeatMs() / 1000 + 's';
};

MetronomeCtrl.prototype.getBeatMs = function() {
    // First beat is from center to an edge and is only
    // half the length a normal beat
    return this.$scope.beatMs / (this.$scope.firstBeat ? 2 : 1);
};

MetronomeCtrl.prototype.bpmInRange = function() {
    return this.$scope.bpm >= this.$scope.minBpm && this.$scope.bpm <= this.$scope.maxBpm;
};

MetronomeCtrl.prototype.getInputErrorText = function() {
    var errorText;
    if (this.$scope.bpm < this.$scope.minBpm) {
        errorText = 'Minimum is ' + this.$scope.minBpm + '.';
    } else if (this.$scope.bpm > this.$scope.maxBpm) {
        errorText = 'Maximum is ' + this.$scope.maxBpm + '.';
    } else {
        errorText = '';
    }
    return errorText;
};

MetronomeApp.controller('MetronomeCtrl',MetronomeCtrl);