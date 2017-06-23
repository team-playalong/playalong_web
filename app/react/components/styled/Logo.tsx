import * as React from 'react';
import styled from 'styled-components';

const logoSrc = '../../../../assets/images/plyIcon.png';
const LogoComponent = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

function Logo() {
  return (<LogoComponent src={logoSrc} />);
}

export default Logo;
