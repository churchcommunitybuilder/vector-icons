import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Plus: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M16.852 14.012h12.481v2.836H16.852v12.485h-2.84V16.848H2.667v-2.836h11.345V2.667h2.84v11.345z" />
  </Svg>
);

export default React.memo(Plus);
