(function () {
    'use strict';
    var plyTuner = {
        template: "\n      <div id=\"tuner\" \n           translate-namespace=\"tuner\">\n          <md-card layout-align=\"center\" class=\"ply-search-results\">\n            <md-card-content>\n              \n              <div>\n                <h3 translate=\".TITLE\"></h3>\n                <h5>View horizontally for mobile devices</h5>\n                <div id=\"tunerViewContainer\">\n                <div layout=\"row\">\n                  <div id=\"noteViewContainer\">\n                      <div id=\"tuneArrowLeft\"></div>\n                      <div id=\"noteView\">E</div>\n                      <div id=\"tuneArrowRight\"></div>\n                  </div>\n                </div>\n                \n                  <div id=\"tunerView\">\n                    <div id=\"needle2\"></div>\n                    <div id = \"tick_0\" ></div>\n                    <div id=\"tick_1\"></div>\n                    <div id=\"tick_-1\"></div>\n                    <div id=\"tick_2\"></div>\n                    <div id=\"tick_-2\"></div>\n                    <div id=\"tick_3\"></div>\n                    <div id=\"tick_-3\"></div>\n                    <div id=\"tick_4\"></div>\n                    <div id=\"tick_-4\"></div>\n                    <div id=\"tick_5\" ></div>\n                    <div id=\"tick_-5\"></div>\n                    <div id=\"tick_6\"></div>\n                    <div id=\"tick_-6\"></div>\n                    <div id=\"tick_7\"></div>\n                    <div id=\"tick_-7\"></div>\n                  </div>\n\n                  \n                  <h2>{{$ctrl.noteFreq}} Hz</h2>\n                </div>\n                <div id=\"playPauseContainer\" style=\"display:none;\">\n                    <div id=\"playPause\" ng-class=\"{true:'pause', false:'play'}[$ctrl.playing === true]\" ng-click=\"$ctrl.playPause()\">  \n                    </div>\n                </div>\n              </div>    \n            </md-card-content>\n          </md-card>\n      </div>\n    ",
        controller: 'TunerCtrl',
        contrllerAs: '$ctrl',
    };
    angular.module('playalongWebApp')
        .controller('TunerCtrl', TunerCtrl)
        .component('plyTuner', plyTuner);
    TunerCtrl.$inject = ['login', '$scope', '$timeout', '$state', '$rootScope'];
    function TunerCtrl(login, $scope, $timeout, $state, $rootScope) {
        var $ctrl = this;
        var numTicks = 10;
        var dialDegrees = 45;
        var timerInterval;
        $ctrl.currPage = 'tuner.PAGE_TITLE';
        $ctrl.login = login;
        $ctrl.noteFreq = 0;
        $ctrl.timer = 'Pausad';
        $ctrl.$onInit = function () {
            if (!!window.mixpanel) {
                window.mixpanel.track('ply_page_view_tuner');
            }
            $scope.$watch('noteFreq', function () { });
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (fromState.name === 'tuner') {
                    pause();
                }
            });
            initAudio();
            formatTunerView();
        };
        function formatTunerView() {
            var $tunerViewContainer = $('#tunerView');
            for (i = 1; i <= numTicks; i++) {
                var $div = $("<div>", { id: "tick_" + i });
                $tunerViewContainer.append($div);
                $div = $("<div>", { id: "tick_" + (-1) * i });
                $tunerViewContainer.append($div);
            }
        }
        function play() {
            var div = document.getElementById("playPause");
            div.className = "pause";
            startAudio();
            startClock();
            $ctrl.playing = true;
        }
        function pause() {
            var div = document.getElementById("playPause");
            div.className = "play";
            stopAudio();
            $ctrl.playing = false;
            $ctrl.timer = "Pausad";
            clearInterval(timerInterval);
        }
        $ctrl.playPause = function () {
            if ($ctrl.playing == true) {
                pause();
            }
            else {
                play();
            }
        };
        function startClock() {
            var timeoutLengthSeconds = 5 * 60;
            var start = Date.now();
            updateClock(timeoutLengthSeconds);
            timerInterval = setInterval(function () {
                var secondsPassed = (Date.now() - start) / 1000;
                if (secondsPassed < timeoutLengthSeconds) {
                    updateClock(timeoutLengthSeconds - secondsPassed);
                }
                else {
                    pause();
                }
            }, 1000);
        }
        function updateClock(timeoutLengthSeconds) {
            function formatNumberLength(num, length) {
                var r = "" + num;
                while (r.length < length) {
                    r = "0" + r;
                }
                return r;
            }
            var minutes = Math.floor(timeoutLengthSeconds / 60);
            var seconds = Math.floor(timeoutLengthSeconds % 60);
            //Kallar onTimeout för att $ctrl.timer ska uppdateras i DOM
            $scope.onTimeout = function () {
                if ($state.current.name === 'tuner') {
                    mytimeout = $timeout($scope.onTimeout, 100);
                    $ctrl.timer = formatNumberLength(minutes, 2) + ":" + formatNumberLength(seconds, 2);
                }
            };
            var mytimeout = $timeout($scope.onTimeout, 100);
        }
        function updateTuner(noteIndex, noteError, noteFrequency) {
            if ($state.current.name !== 'tuner') {
                return;
            }
            //TODO: Assert params
            if (!(noteIndex && noteError) || !(noteIndex > 0 && noteIndex < 12) || !(noteError > -50 && noteError < 50))
                return;
            var sharpHtml = '<sup class="sharp">#</sup>';
            var notes = ['C', 'C' + sharpHtml, 'D', 'D' + sharpHtml, 'E', 'F', 'F' + sharpHtml, 'G', 'G' + sharpHtml, 'A', 'A' + sharpHtml, 'B'];
            $ctrl.noteFreq = Math.round(noteFrequency);
            var needle = document.getElementById("needle2");
            var degrees = noteError * 2.0 * dialDegrees;
            //  needle.style.webkitTransform = 'rotate('+degrees+'deg)';
            //needle.style.MozTransform = 'rotate('+degrees+'deg)';
            //Gånger faktor 5 istället..
            needle.style["-webkit-transform"] = "translate(" + 5 * degrees + "px, 0px)";
            needle.style["-moz-transform"] = "translate(-" + 5 * degrees + "px, 0px)";
            for (var i = 0; i < 8; i++) {
                document.getElementById('tick_' + i).className = "";
                document.getElementById("tick_" + (-1) * i).className = "";
            }
            document.getElementById('tuneArrowLeft').className = "";
            document.getElementById('tuneArrowRight').className = "";
            var noteView = document.getElementById("noteView");
            noteView.innerHTML = notes[noteIndex];
            //Stämd!!
            if (Math.abs(noteError) < 0.05) {
                var tick = document.getElementById("tick_0");
                tick.className = "tick_0Highlighted";
                //Sätt bokstaven till grön
                document.getElementById("noteView").className = "noteCleanHighlighted";
                document.getElementById('tuneArrowLeft').className = "tuneArrowLeft_ok";
                document.getElementById('tuneArrowRight').className = "tuneArrowRight_ok";
            }
            else {
                var tick = document.getElementById("tick_0");
                tick.className = "tick_0_normal";
                //Sätt bokstaven till röd
                document.getElementById("noteView").className = "noteWrongHighlighted";
                //Får inte vara för stort fel, skit i att highlighta då
                if ((Math.abs(5 * degrees) / 30) < 7.5) {
                    var tickToHighlight = document.getElementById('tick_' + Math.round((5 * degrees) / 30));
                    tickToHighlight.className = "tickHighlighted";
                }
                //På vänstra sidan
                if (degrees < 0)
                    document.getElementById('tuneArrowLeft').className = "tuneArrowLeft_wrong";
                else
                    document.getElementById('tuneArrowRight').className = "tuneArrowRight_wrong";
            }
        }
        var audioContext;
        if (typeof AudioContext !== 'undefined') {
            audioContext = new AudioContext();
        }
        var inputStreamNode = null, gainNode = null;
        function getMaxPeak(inputVector, numFreq) {
            numFreq = typeof numFreq !== 'undefined' ? numFreq : 2000;
            var vec1 = inputVector;
            var vec2 = [], vec3 = [], vec4 = [], vec5 = [];
            for (var i = 0; i < numFreq; i++) {
                if (i % 2 === 0)
                    vec2.push(inputVector[i]);
                if (i % 3 === 0)
                    vec3.push(inputVector[i]);
                if (i % 4 === 0)
                    vec4.push(inputVector[i]);
                if (i % 5 === 0)
                    vec5.push(inputVector[i]);
            }
            var zeroArray = [];
            var length = 0;
            //Temp solution. want to add exact zeros
            while (length < 2000) {
                zeroArray.push(0);
                length++;
            }
            vec2.concat(zeroArray);
            vec3.concat(zeroArray);
            vec4.concat(zeroArray);
            vec5.concat(zeroArray);
            var sumVec = [];
            for (var i = 0; i < numFreq; i++)
                sumVec[i] = vec1[i] + vec2[i] + vec3[i] + vec4[i] + vec5[i];
            var peakMax = 0;
            var peakMaxInd = 0;
            var size = inputVector.length * 2;
            var whichStaple = 0;
            var sum = 0;
            for (var i = 7; i < numFreq; i++) {
                // console.log('inputVector ' , inputVector[i]);
                // var amplitude = inputVector[i];
                var amplitude = sumVec[i];
                if (amplitude > peakMax) {
                    peakMax = amplitude;
                    peakMaxInd = i;
                }
            }
            return { "peakInd": peakMaxInd, "peakAmp": peakMax };
        }
        //MAIN
        var scriptProcessorNode;
        var audioWindowSize = 65536;
        var audioWindow = new Float32Array(audioWindowSize);
        var audioWindowProcessed = new Float32Array(audioWindowSize);
        var hammingWindowFilter = new Float32Array(audioWindowSize);
        var sampleRate;
        for (var i = 0; i < hammingWindowFilter.length; i++) {
            hammingWindowFilter[i] = 0.54 - 0.46 * Math.cos(2 * Math.PI * i / (hammingWindowFilter.length - 1));
        }
        ;
        var fft;
        function applyHamming(inputVector, outputVector) {
            for (var i = 0; i < inputVector.length; i++) {
                outputVector[i] = inputVector[i] * hammingWindowFilter[i];
            }
            ;
        }
        function log2(val) {
            return Math.log(val) / Math.LN2;
        }
        function getNoteInfo(frequency) {
            var note = (Math.round(57 + log2(frequency / 440.0) * 12)) % 12;
            var note2 = Math.round(57 + log2(frequency / 440.0) * 12);
            var noteFull = Math.round(log2(frequency / 440.0) * 12); //runda ner till semiton
            var noteFreq = Math.pow(2, noteFull / 12.0) * 440.0; //ta fram notfreq från rundad semiton - nära grundfreq
            var errorMin = frequency - noteFreq;
            var noteOther = (errorMin > 0) ? noteFull + 1 : noteFull - 1;
            var freqOther = Math.pow(2, noteOther / 12.0) * 440.0;
            var cent = errorMin / Math.abs(noteFreq - freqOther);
            // console.log('note' ,note , 'cent ' ,cent , 'frekvens ', frequency);
            var noteInfo = {
                "noteIndex": note,
                "noteError": cent,
                "noteFreq": frequency
            };
            return noteInfo;
        }
        // Create a stream of the audio input 
        function gotStream(stream) {
            document.getElementById('playPause').style.display = 'block';
            var bufferSize = 2048; // Måste va power of 2, 
            gainNode = audioContext.createGain(); //Skapar GainNode objekt som kan kontrollera volymen
            gainNode.gain.value = 1000.0;
            inputStreamNode = audioContext.createMediaStreamSource(stream); //Skapar ett MediaStreamAudioSourceNode objekt som strömmar in ljud från mikrofonen.
            inputStreamNode.connect(gainNode); //Kopplar ihop med ljudkontrollen
            scriptProcessorNode = audioContext.createScriptProcessor(bufferSize, 1, 1); //För ljudanalys, en inkanal och en utkanal
            sampleRate = audioContext.sampleRate; //Hämta sample per sekund från audio input, används för alla objekt/noder 
            if (typeof FFT !== 'undefined') {
                fft = new FFT(audioWindowSize, sampleRate); //Skapar fouriertransform. Hitta en balans mellan windowsize och samplerate (65536 standard?)  
            }
            gainNode.connect(scriptProcessorNode); //koppla ihop volym och ljudobjekt 
            // zeroPadding/zeroGain öka  vektorn för att få bättre upplösning i frekvensen. nogrannare. Effektivare
            var zeroGain = audioContext.createGain();
            zeroGain.gain.value = 0.0;
            scriptProcessorNode.connect(zeroGain);
            zeroGain.connect(audioContext.destination);
            play();
        }
        function stopAudio() {
            scriptProcessorNode.onaudioprocess = null;
        }
        function startAudio() {
            //onaudioprocess är en eventhandler. 
            scriptProcessorNode.onaudioprocess = function (e) {
                var timeVector = e.inputBuffer.getChannelData(0); //Hämta vektorn med audioData
                audioWindow.set(audioWindow.subarray(timeVector.length)); // fixa med hamming
                audioWindow.set(timeVector, audioWindowSize - timeVector.length); // fixa med hamming
                applyHamming(audioWindow, audioWindowProcessed); // lägg hamming
                fft.forward(audioWindowProcessed); //gör fast fourier transform
                $scope.spectrum = fft.spectrum; //ta frekvensspektrumet 
                // console.log('spectrumlol');
                var peakInfo = getMaxPeak($scope.spectrum); //hämta frekvens där vi har högst amplitud
                if (peakInfo["peakAmp"] > 0.5) {
                    var frequency = peakInfo["peakInd"] * sampleRate / audioWindowSize; //omvandla till frekvens
                    var noteInfo = getNoteInfo(frequency); //Hämta info från noter
                    updateTuner(noteInfo["noteIndex"], noteInfo["noteError"], noteInfo["noteFreq"]);
                }
            };
        }
        function browserNotSupported() {
            alert("Sorry. Your browser is not supported. Please use latest versions of either Chrome or Firefox.");
        }
        //allow audio from user
        function initAudio() {
            // console.log('initAudio')
            if (!navigator.getUserMedia) {
                navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            }
            if (!navigator.getUserMedia) {
                browserNotSupported();
            }
            // which media input is used , 
            navigator.getUserMedia({ audio: true }, gotStream, function (e) {
                // alert('Error getting audio');
                console.log(e);
            });
        }
    }
})();
//# sourceMappingURL=tuner.component.js.map