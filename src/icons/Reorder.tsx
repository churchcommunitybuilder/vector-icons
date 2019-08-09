import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Reorder: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M3,15 L21,15 L21,13 L3,13 L3,15 L3,15 Z M3,19 L21,19 L21,17 L3,17 L3,19 L3,19 Z M3,11 L21,11 L21,9 L3,9 L3,11 L3,11 Z M3,5 L3,7 L21,7 L21,5 L3,5 L3,5 Z" />
  </Svg>
)

export default React.memo(Reorder)

