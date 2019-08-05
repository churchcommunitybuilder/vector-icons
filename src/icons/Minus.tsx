import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Minus: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M29.333 14.012H2.666v2.836h26.667z" />
  </Svg>
);

export default React.memo(Minus);
