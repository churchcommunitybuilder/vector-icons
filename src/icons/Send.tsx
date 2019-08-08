import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Send: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M17.693 28.371l10.059-25.953-25.953 10.059 6.173 6.19 14.633-11.102-11.102 14.633z" />
  </Svg>
)

export default React.memo(Send)

