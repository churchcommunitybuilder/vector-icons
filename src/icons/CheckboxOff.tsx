import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const CheckboxEmpty: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M19,5 L19,19 L5,19 L5,5 L19,5 L19,5 Z M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 L19,3 Z" />
  </Svg>
)

export default React.memo(CheckboxEmpty)

