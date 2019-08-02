import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const StarActive: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M16 23.027L24.24 28l-2.187-9.373 7.28-6.307-9.587-.813-3.747-8.84-3.747 8.84-9.587.813 7.28 6.307L7.758 28z" />
  </Svg>
);

export default React.memo(StarActive);
