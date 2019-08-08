import * as React from 'react'
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

const ErrorCross: React.FC<SvgProps> = ({fill, strokeWidth, ...props}) => (
  <Svg {...props}>
    <Path
      strokeWidth={strokeWidth}
      stroke={fill}
      fill="none"
      d="M6.323 5.747l11.944 12.648M5.667 17.963L18.315 6.02"
    />
    <Circle
      stroke={fill}
      r={11.443}
      cy={12.016}
      cx={12.03}
      strokeWidth={strokeWidth}
      fill="none"
    />
    <Path
      strokeWidth={strokeWidth}
      stroke={fill}
      fill="none"
      d="M4.434 11.863h.032M6.509 6.509L17.49 17.49M17.491 6.509L6.51 17.49"
    />
  </Svg>
)

export default React.memo(ErrorCross)
