import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const GridView: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M8,11 L8,5 L3,5 L3,11 L8,11 Z M3,19 L8,19 L8,13 L3,13 L3,19 L3,19 Z M10,19 L15,19 L15,13 L10,13 L10,19 L10,19 Z M17,19 L22,19 L22,13 L17,13 L17,19 L17,19 Z M10,11 L15,11 L15,5 L10,5 L10,11 L10,11 Z M17,5 L17,11 L22,11 L22,5 L17,5 L17,5 Z" />
  </Svg>
)

export default React.memo(GridView)

