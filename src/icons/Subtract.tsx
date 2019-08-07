import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Subtract: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M5 11v2h14v-2z"/>
  </Svg>
)

export default React.memo(Subtract)

