/// <reference path="../typings/index.d.ts" />

interface Window {
	mixpanel: any;
  ga: any;
}

interface Navigator {
	getUserMedia: any;
	webkitGetUserMedia: any;
	mozGetUserMedia: any; 
}

declare var FFT: any; 