import * as React from 'react'
import Svg, { Path, Polygon, SvgProps } from 'react-native-svg'

const Check: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path id="a" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
  </Svg>
)

export default React.memo(Check)
