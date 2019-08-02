import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Back: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M24.553 4.005L21.249.69 6.04 15.849l15.123 15.46 3.345-3.273-11.881-12.145z" />
  </Svg>
);

export default React.memo(Back);
