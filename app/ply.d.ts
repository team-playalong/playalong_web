/// <reference path="../typings/index.d.ts" />

interface Window {
	mixpanel: any;
  ga: any;
  PLY_CONFIG: any;
	firebase: any;
	_cio: any;
	FFT: any;
	AudioContext: any;
}

interface Navigator {
	getUserMedia: any;
	webkitGetUserMedia: any;
	mozGetUserMedia: any;
}

declare var buzz: any;
