import * as React from 'react'
import Svg, { Polygon, SvgProps } from 'react-native-svg'

const Add: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Polygon points="11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13 19 11 13 11 13 5" />
  </Svg>
)

export default React.memo(Add)
