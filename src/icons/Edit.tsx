import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Edit: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M4 23v5h5l14.747-14.747-5-5L4 23zM27.613 9.387c.52-.52.52-1.36 0-1.88l-3.12-3.12c-.52-.52-1.36-.52-1.88 0l-2.44 2.44 5 5 2.44-2.44z" />
  </Svg>
);

export default React.memo(Edit);
