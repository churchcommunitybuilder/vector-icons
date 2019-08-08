import * as React from 'react'
import Svg, { Polygon, SvgProps } from 'react-native-svg'

const ArrowDropup: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Polygon points="7 14 12 9 17 14" />
  </Svg>
)

export default React.memo(ArrowDropup)

