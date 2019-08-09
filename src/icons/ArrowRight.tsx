import * as React from 'react'
import Svg, { Polygon, SvgProps } from 'react-native-svg'

const ArrowRight: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Polygon points="12 4 10.6 5.4 16.2 11 4 11 4 13 16.2 13 10.6 18.6 12 20 20 12" />
  </Svg>
)

export default React.memo(ArrowRight)

