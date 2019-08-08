import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Columns: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M2,5 L2,19 L22,19 L22,5 L2,5 Z M14,7 L14,17 L10,17 L10,7 L14,7 Z M4,7 L8,7 L8,17 L4,17 L4,7 Z M20,17 L16,17 L16,7 L20,7 L20,17 Z" />
  </Svg>
)

export default React.memo(Columns)

