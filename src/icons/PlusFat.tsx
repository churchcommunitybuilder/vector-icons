import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PlusFatty: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M17.333 14.667h5.333v2.667h-5.333v5.333h-2.667v-5.333H9.333v-2.667h5.333V9.334h2.667v5.333z" />
  </Svg>
);

export default React.memo(PlusFatty);
