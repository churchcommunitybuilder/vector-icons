import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Delete: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M8 25.333C8 26.8 9.2 28 10.667 28h10.667c1.467 0 2.667-1.2 2.667-2.667v-16h-16v16zm17.333-20h-4.667L19.333 4h-6.667l-1.333 1.333H6.666V8h18.667V5.333z" />
  </Svg>
);

export default React.memo(Delete);
