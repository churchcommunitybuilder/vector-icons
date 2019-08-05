import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Star: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M29.333 12.32l-9.587-.827-3.747-8.827-3.747 8.84-9.587.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-.507L16 8.133l2.28 5.387 5.84.507-4.427 3.84 1.333 5.707-5.027-3.04z" />
  </Svg>
);

export default React.memo(Star);