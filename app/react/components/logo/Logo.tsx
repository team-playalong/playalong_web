import * as React from 'react';

const logoSrc = '../../../../assets/images/plyIcon.png';

function PlyLogo() {
  return (
    <img
      src={logoSrc}
      className='ply-logo'
      alt='Playalong'
    />
  );
}

export const props = [];
export default PlyLogo;
