import * as React from 'react'
import Svg, { Circle, SvgProps } from 'react-native-svg'

const Dot: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Circle cx={12} cy={12} r={5} />
  </Svg>
)

export default React.memo(Dot)

