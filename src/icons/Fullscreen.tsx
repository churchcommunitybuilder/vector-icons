import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Fullscreen: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M7,14 L5,14 L5,19 L10,19 L10,17 L7,17 L7,14 L7,14 Z M5,10 L7,10 L7,7 L10,7 L10,5 L5,5 L5,10 L5,10 Z M17,17 L14,17 L14,19 L19,19 L19,14 L17,14 L17,17 L17,17 Z M14,5 L14,7 L17,7 L17,10 L19,10 L19,5 L14,5 L14,5 Z" />
  </Svg>
)

export default React.memo(Fullscreen)

