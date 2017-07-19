import * as React from 'react';
import styled from 'styled-components';

const logoSrc = '../../../../assets/images/plyIcon.png';
const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

function PlyLogo() {
  return (
    <LogoImg src={logoSrc}></LogoImg>
  );
}

export const props = [];
export default PlyLogo;
