import * as React from 'react'
import Svg, { Defs, Use, G, Mask, Path, SvgProps } from 'react-native-svg'

const Star: React.FC<SvgProps> = ({ fill, stroke, strokeWidth, ...props}) => (
  <Svg {...props}>
    <Path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={fill}
      fillRule="evenodd"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
)

export default React.memo(Star)

