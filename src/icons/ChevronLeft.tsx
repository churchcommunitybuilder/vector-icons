import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ChevronLeft: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M20.533 9.867L18.666 8l-8 8 8 8 1.867-1.867L14.4 16z" />
  </Svg>
);

export default React.memo(ChevronLeft);
