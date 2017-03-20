(function() {
  'use strict';

  const plyTuner = {
    template: `
      <div id="tuner"
           translate-namespace="tuner">
          <md-card layout-align="center" class="ply-search-results">
            <md-card-content>

              <div>
                <h3 translate=".TITLE"></h3>
                <h5>View horizontally for mobile devices</h5>
                <div id="tunerViewContainer">
                <div layout="row">
                  <div id="noteViewContainer">
                      <div id="tuneArrowLeft"></div>
                      <div id="noteView">E</div>
                      <div id="tuneArrowRight"></div>
                  </div>
                </div>

                  <div id="tunerView">
                    <div id="needle2"></div>
                    <div id = "tick_0" ></div>
                    <div id="tick_1"></div>
                    <div id="tick_-1"></div>
                    <div id="tick_2"></div>
                    <div id="tick_-2"></div>
                    <div id="tick_3"></div>
                    <div id="tick_-3"></div>
                    <div id="tick_4"></div>
                    <div id="tick_-4"></div>
                    <div id="tick_5" ></div>
                    <div id="tick_-5"></div>
                    <div id="tick_6"></div>
                    <div id="tick_-6"></div>
                    <div id="tick_7"></div>
                    <div id="tick_-7"></div>
                  </div>


                  <h2>{{$ctrl.noteFreq}} Hz</h2>
                </div>
                <div id="playPauseContainer" style="display:none;">
                    <div id="playPause" ng-class="{true:'pause', false:'play'}[$ctrl.playing === true]" ng-click="$ctrl.playPause()">
                    </div>
                </div>
              </div>
            </md-card-content>
          </md-card>
      </div>
    `,
    controller: 'TunerCtrl',
    contrllerAs: '$ctrl',
  };

  angular.module('playalongWebApp')
  .controller('TunerCtrl', TunerCtrl)
  .component('plyTuner', plyTuner);

  TunerCtrl.$inject = ['login', '$scope', '$timeout', '$state', '$rootScope'];

  function TunerCtrl(login, $scope, $timeout, $state, $rootScope) {
    const $ctrl = this;

    const numTicks = 10;
    const dialDegrees = 45;
    let timerInterval;

    $ctrl.currPage = 'tuner.PAGE_TITLE';
    $ctrl.login = login;
    $ctrl.noteFreq = 0;
    $ctrl.timer = 'Pausad';

    $ctrl.$onInit = () => {
      if (!!window.mixpanel) {
        window.mixpanel.track('ply_page_view_tuner');
      }

      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
         if (fromState.name === 'tuner') {
           pause();
         }

      });

      initAudio();
      formatTunerView();
    };

    function formatTunerView() {
      const $tunerViewContainer = $('#tunerView');
      for (let i = 1; i <= numTicks; i++) {
        let $div = $('<div>', { id: 'tick_' + i });
        $tunerViewContainer.append($div);
        $div = $('<div>', { id: 'tick_' + (-1) * i });
        $tunerViewContainer.append($div);
      }
    }

     function play() {
       const div = document.getElementById('playPause');
       div.className = 'pause';
       startAudio();
       startClock();
       $ctrl.playing = true;
     }

     function pause() {
       const div = document.getElementById('playPause');
       div.className = 'play';
       stopAudio();
       $ctrl.playing = false;
       $ctrl.timer = 'Pausad';
       clearInterval(timerInterval);
     }

     $ctrl.playPause = function () {

      if ($ctrl.playing === true) {
         pause();
       }
       else {
         play();
       }
     };

     function startClock() {
       const timeoutLengthSeconds = 5 * 60;
       const start = Date.now();
       updateClock(timeoutLengthSeconds);
       timerInterval = setInterval(function() {
         const secondsPassed = (Date.now() - start) / 1000;
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
         let r = '' + num;
         while (r.length < length) {
           r = '0' + r;
         }
         return r;
       }
       const minutes = Math.floor(timeoutLengthSeconds / 60);
       const seconds = Math.floor(timeoutLengthSeconds % 60);
       let mytimeout = $timeout($scope.onTimeout, 100);
      $scope.onTimeout = function(){
        if ($state.current.name === 'tuner') {
          mytimeout = $timeout($scope.onTimeout, 100);
          $ctrl.timer = formatNumberLength(minutes, 2) + ':' + formatNumberLength(seconds, 2);
        }
      };
    }

    function updateTuner(noteIndex, noteError, noteFrequency) {
      if ($state.current.name !== 'tuner') { return; }

      // TODO: Assert params
      if (!(noteIndex && noteError) || !(noteIndex > 0 && noteIndex < 12) || !(noteError > -50 && noteError < 50)) {
        return;
      }

      const sharpHtml = '<sup class="sharp">#</sup>';
      const notes = ['C', 'C' + sharpHtml, 'D', 'D' + sharpHtml, 'E', 'F', 'F' + sharpHtml, 'G', 'G' + sharpHtml, 'A', 'A' + sharpHtml, 'B'];

      $ctrl.noteFreq = Math.round(noteFrequency);
      const needle = document.getElementById('needle2');

      const degrees = noteError * 2.0 * dialDegrees;
    //  needle.style.webkitTransform = 'rotate('+degrees+'deg)';
      // needle.style.MozTransform = 'rotate('+degrees+'deg)';

      // Gånger faktor 5 istället..
      needle.style['-webkit-transform'] = 'translate(" + 5*degrees + "px, 0px)';
      needle.style['-moz-transform'] = 'translate(-' + 5 * degrees + 'px, 0px)';

      for (let i = 0; i < 8; i++) {

        document.getElementById('tick_' + i).className = '';
        document.getElementById('tick_' + (-1) * i).className = '';

      }

      document.getElementById('tuneArrowLeft').className = '';
      document.getElementById('tuneArrowRight').className = '';

      const noteView = document.getElementById('noteView');
      noteView.innerHTML = notes[noteIndex];

      // Stämd!!
      if (Math.abs(noteError) < 0.05) {
        const tick = document.getElementById('tick_0');
        tick.className = 'tick_0Highlighted';

        // Sätt bokstaven till grön
        document.getElementById('noteView').className = 'noteCleanHighlighted';

        document.getElementById('tuneArrowLeft').className = 'tuneArrowLeft_ok';
        document.getElementById('tuneArrowRight').className = 'tuneArrowRight_ok';
      }

      else {
        const tick = document.getElementById('tick_0');
        tick.className = 'tick_0_normal';

        document.getElementById('noteView').className = 'noteWrongHighlighted';

        if ((Math.abs(5 * degrees) / 30) < 7.5) {
          const tickToHighlight = document.getElementById('tick_' + Math.round((5 * degrees) / 30));
          tickToHighlight.className = 'tickHighlighted';
        }

        if (degrees < 0) {
          document.getElementById('tuneArrowLeft').className = 'tuneArrowLeft_wrong';
        }

        else {
          document.getElementById('tuneArrowRight').className = 'tuneArrowRight_wrong';
        }

      }

    }

    let audioContext;
    if (typeof AudioContext !== 'undefined') {
      audioContext = new AudioContext();
    }
    let inputStreamNode = null;
    let gainNode = null;

    function getMaxPeak(inputVector, numFreq?) {
      const newNumFreq = typeof numFreq !== 'undefined' ? numFreq : 2000;

      const vec1 = inputVector;
      const vec2 = [];
      const vec3 = [];
      const vec4 = [];
      const vec5 = [];

      for (let i = 0; i < newNumFreq; i++) {
        if (i % 2 === 0) {
          vec2.push(inputVector[i]);
        }

        if (i % 3 === 0) {
          vec3.push(inputVector[i]);
        }
        if (i % 4 === 0) {
          vec4.push(inputVector[i]);
        }

        if (i % 5 === 0) {
          vec5.push(inputVector[i]);
        }
      }

      const zeroArray = [];
      let length = 0;
        // Temp solution. want to add exact zeros
        while (length < 2000) {
          zeroArray.push(0);
          length++;
        }
        vec2.concat(zeroArray);
        vec3.concat(zeroArray);
        vec4.concat(zeroArray);
        vec5.concat(zeroArray);

        const sumVec = [];
        for (let i = 0; i < numFreq; i++) {
          sumVec[i] = vec1[i] + vec2[i] + vec3[i] + vec4[i] + vec5[i];
        }

        let peakMax = 0;
        let peakMaxInd = 0;
        const size = inputVector.length * 2;
        const whichStaple = 0;
        const sum = 0;

        for (let i = 7; i < numFreq; i++) {
          const amplitude = sumVec[i];

          if (amplitude > peakMax) {
            peakMax = amplitude;
            peakMaxInd = i;
          }
        }

        return { peakInd: peakMaxInd, peakAmp: peakMax };
        }

    // MAIN
    let scriptProcessorNode;
    const audioWindowSize = 65536;
    const audioWindow = new Float32Array(audioWindowSize);
    const audioWindowProcessed = new Float32Array(audioWindowSize);
    const hammingWindowFilter = new Float32Array(audioWindowSize);
    let sampleRate;
    for (let i = 0; i < hammingWindowFilter.length; i++) {
      hammingWindowFilter[i] = 0.54 - 0.46 * Math.cos(2 * Math.PI * i / (hammingWindowFilter.length - 1));
    };
    let fft;

    function applyHamming(inputVector, outputVector) {
      for (let i = 0; i < inputVector.length; i++) {
        outputVector[i] = inputVector[i] * hammingWindowFilter[i];
      };
    }

    function log2(val) {
      return Math.log(val) / Math.LN2;
    }

    function getNoteInfo(frequency) {
      const note = (Math.round(57 + log2(frequency / 440.0) * 12)) % 12;
      const note2 = Math.round(57 + log2(frequency / 440.0) * 12);

      const noteFull = Math.round(log2(frequency / 440.0) * 12); // runda ner till semiton
      const noteFreq = Math.pow(2, noteFull / 12.0) * 440.0; // ta fram notfreq från rundad semiton - nära grundfreq

      const errorMin = frequency - noteFreq;

      const noteOther = (errorMin > 0) ? noteFull + 1 : noteFull - 1;

      const freqOther = Math.pow(2, noteOther / 12.0) * 440.0;

      const cent = errorMin / Math.abs(noteFreq - freqOther);
      // console.log('note' ,note , 'cent ' ,cent , 'frekvens ', frequency);

      const noteInfo = {
        noteIndex: note,
        noteError: cent,
        noteFreq: frequency,
      };

      return noteInfo;
    }
    // Create a stream of the audio input
    function gotStream(stream) {

      document.getElementById('playPause').style.display = 'block';

        const bufferSize = 2048; // Måste va power of 2,
        gainNode = audioContext.createGain(); // Skapar GainNode objekt som kan kontrollera volymen
        gainNode.gain.value = 1000.0;

        inputStreamNode = audioContext.createMediaStreamSource(stream); // Skapar ett MediaStreamAudioSourceNode objekt som strömmar in ljud från mikrofonen.
        inputStreamNode.connect(gainNode); // Kopplar ihop med ljudkontrollen

        scriptProcessorNode = audioContext.createScriptProcessor(bufferSize, 1, 1); // För ljudanalys, en inkanal och en utkanal

        sampleRate = audioContext.sampleRate; // Hämta sample per sekund från audio input, används för alla objekt/noder

        if (typeof FFT !== 'undefined') {
          fft = new FFT(audioWindowSize, sampleRate); // Skapar fouriertransform. Hitta en balans mellan windowsize och samplerate (65536 standard?)
        }

        gainNode.connect (scriptProcessorNode); // koppla ihop volym och ljudobjekt

        // zeroPadding/zeroGain öka  vektorn för att få bättre upplösning i frekvensen. nogrannare. Effektivare
        const zeroGain = audioContext.createGain();
        zeroGain.gain.value = 0.0;
        scriptProcessorNode.connect(zeroGain);
        zeroGain.connect(audioContext.destination);

        play();
      }

      function stopAudio() {
        scriptProcessorNode.onaudioprocess = null;
      }

      function startAudio() {
        // onaudioprocess är en eventhandler.
        scriptProcessorNode.onaudioprocess = function(e){
          const timeVector = e.inputBuffer.getChannelData(0); // Hämta vektorn med audioData
          audioWindow.set(audioWindow.subarray(timeVector.length)); // fixa med hamming
          audioWindow.set(timeVector, audioWindowSize - timeVector.length); // fixa med hamming
          applyHamming(audioWindow, audioWindowProcessed); // lägg hamming
          fft.forward(audioWindowProcessed);  // gör fast fourier transform

          $scope.spectrum = fft.spectrum;    // ta frekvensspektrumet
          // console.log('spectrumlol');
          const peakInfo = getMaxPeak($scope.spectrum);  // hämta frekvens där vi har högst amplitud
          if (peakInfo.peakAmp > 0.5) {    // använd bara peakar över 0.5 för bättre nogrannhet
            const frequency = peakInfo.peakInd * sampleRate / audioWindowSize;   // omvandla till frekvens
            const noteInfo = getNoteInfo(frequency);      // Hämta info från noter
            updateTuner(noteInfo.noteIndex, noteInfo.noteError, noteInfo.noteFreq);
          }
        };
      }

          function browserNotSupported() {
            alert('Sorry. Your browser is not supported. Please use latest versions of either Chrome or Firefox.');
          }
    // allow audio from user
    function initAudio() {
      // console.log('initAudio')
      if (!navigator.getUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      }

      if (!navigator.getUserMedia) {
        browserNotSupported();
      }

      // which media input is used ,
      navigator.getUserMedia({ audio: true }, gotStream, function(e) {
        console.log(e);
      });
    }
  }
})();
