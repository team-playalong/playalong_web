// Based on this - https://material.angularjs.org/latest/#/Theming/03_configuring_a_theme

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('playalongPrimary', {
      '50': '03A9F4',
      
      //TODO - complete the others
      '100': '03A9F4',
      '200': '03A9F4',
      '300': '03A9F4',
      '400': '03A9F4',
      '500': '03A9F4',
      '600': '03A9F4',
      '700': '03A9F4',
      '800': '03A9F4',
      '900': '03A9F4',
      'A100': '03A9F4',
      'A200': '03A9F4',
      'A400': '03A9F4',
      'A700': '03A9F4',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

  	$mdThemingProvider.definePalette('playalongAccent', {
  	    '50': '#FF4081',
  	    
  	    //TODO - complete the others
  	    '100': '#FF4081',
  	    '200': '#FF4081',
  	    '300': '#FF4081',
  	    '400': '#FF4081',
  	    '500': '#FF4081',
  	    '600': '#FF4081',
  	    '700': '#FF4081',
  	    '800': '#FF4081',
  	    '900': '#FF4081',
  	    'A100': '#FF4081',
  	    'A200': '#FF4081',
  	    'A400': '#FF4081',
  	    'A700': '#FF4081',
  	    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
  	                                        // on this palette should be dark or light
  	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
  	     '200', '300', '400', 'A100'],
  	    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  	  });

	$mdThemingProvider.definePalette('playalongBackground', {
	    '50': '#FFFFFF',
	    
	    //TODO - complete the others
	    '100': '#FFFFFF',
	    '200': '#FFFFFF',
	    '300': '#FFFFFF',
	    '400': '#FFFFFF',
	    '500': '#FFFFFF',
	    '600': '#FFFFFF',
	    '700': '#FFFFFF',
	    '800': '#FFFFFF',
	    '900': '#FFFFFF',
	    'A100': '#FFFFFF',
	    'A200': '#FFFFFF',
	    'A400': '#FFFFFF',
	    'A700': '#FFFFFF',
	    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
	                                        // on this palette should be dark or light
	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
	     '200', '300', '400', 'A100'],
	    'contrastLightColors': undefined    // could also specify this if default was 'dark'
	  });

    $mdThemingProvider.theme('default')
      .primaryPalette('playalongPrimary')
      .accentPalette('playalongAccent')
      .backgroundPalette('playalongBackground');
});