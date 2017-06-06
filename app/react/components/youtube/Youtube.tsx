import * as React from 'react';
import { generateUuid } from '../../helpers/uuid';
import { invokeIfFunction } from '../../helpers/common';

interface YoutubeProps {
  id?: string;
  width?: number;
  height?: number;
  videoId: string;
}

const defaultProps = {
  id: 'plyYoutubeIframe',
  width: 300,
  height: 150,
};

const youtubePrefix = '//www.youtube.com/embed/';

function buildVideoId(props) {
  return youtubePrefix + props.videoId;
}

function Youtube(props: YoutubeProps) {
  props = Object.assign({}, defaultProps, props);

  return (
    <iframe
      id={props.id}
      width={props.width}
      height={props.height}
      src={buildVideoId(props)}
      frameBorder='0'
      allowFullScreen
    >
    </iframe>
  );
}

export const props = ['id', 'width', 'height', 'videoId'];
export default Youtube;
