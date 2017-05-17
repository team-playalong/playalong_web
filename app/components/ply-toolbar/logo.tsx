import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const plyLogo = {
  controller: ['$element',
    function($element) {
      this.$onInit = () => {
        render(
          <img
            src='assets/images/plyIcon.png'
            className='ply-logo'
            alt='Playalong'
          />,
          $element[0],
        );
      };
      this.$onDestroy = () => unmountComponentAtNode($element[0]);
    },
  ],
};

export default plyLogo;
