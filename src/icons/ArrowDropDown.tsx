import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowDropDown: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M9.333 13.333L16 20l6.667-6.667z" />
  </Svg>
);

export default React.memo(ArrowDropDown)