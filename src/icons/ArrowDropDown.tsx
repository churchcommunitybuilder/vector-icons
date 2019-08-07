import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowDropDown: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M7 9l5 5 5-5z" />
  </Svg>
);

export default React.memo(ArrowDropDown)
