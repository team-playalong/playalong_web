import * as React from 'react';
import styled from 'styled-components';

const TitleComp = styled.h1`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .005em;
`;

interface PlyTitleProps {
  text: string;
}

// class TextSlider extends React.Component<TextSliderProps, TextSliderState> {
const PlyTitle: React.StatelessComponent<{}> = (props: PlyTitleProps) => {
  return (
    <TitleComp>{props.text}</TitleComp>
  );
};

export const props = ['text'];
export default PlyTitle;
