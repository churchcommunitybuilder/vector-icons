import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Filter: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M13.333 24h5.333v-2.667h-5.333V24zM4 8v2.667h24V8H4zm4 9.333h16v-2.667H8v2.667z" />
  </Svg>
);

export default React.memo(Filter);
