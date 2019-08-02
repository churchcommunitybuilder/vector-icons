import * as React from 'react';
import Svg, { Circle, Polygon } from 'react-native-svg';
var Back = function (props) { return (<Svg {...props} viewBox="0 0 32 32">
    <Circle fill="#f8f9fa" cx="16" cy="16" r="16"/>
    <Polygon fill="#8697a3" points="24 15 11.8 15 17.4 9.4 16 8 8 16 16 24 17.4 22.6 11.8 17 24 17"/>
  </Svg>); };
export default React.memo(Back);
//# sourceMappingURL=BackCircle.js.map