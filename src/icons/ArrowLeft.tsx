import * as React from 'react'
import Svg, { Polygon, SvgProps } from 'react-native-svg'

const ArrowLeft: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Polygon points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13" />
  </Svg>
)

export default React.memo(ArrowLeft)

