import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CameraSwitch: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M24.179 16a8 8 0 00-13.025-6.225S9.34 7.82 9.333 7.82a10.625 10.625 0 016.846-2.487c5.891 0 10.667 4.776 10.667 10.667h5.02l-6.6 6.6-6.6-6.6h5.513zm-16.18 0a8 8 0 0013.026 6.225s1.814 1.955 1.821 1.955A10.625 10.625 0 0116 26.667c-5.891 0-10.661-4.776-10.661-10.667H0l6.6-6.667L13.2 16H8z" />
  </Svg>
);

export default React.memo(CameraSwitch);
