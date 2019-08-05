import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MoreVertical: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M16 10.667c1.467 0 2.667-1.2 2.667-2.667S17.467 5.333 16 5.333c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667zm0 2.666c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667zm0 8c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667z" />
  </Svg>
);

export default React.memo(MoreVertical);
