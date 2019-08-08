import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Grouped: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M18,16 L12,16 L12,8 L18,8 L18,6 L6,6 L6,18 L18,18 L18,16 Z M4,4 L20,4 L20,20 L4,20 L4,4 Z M14,10 L14,14 L18,14 L18,10 L14,10 Z" />
  </Svg>
)

export default React.memo(Grouped)

