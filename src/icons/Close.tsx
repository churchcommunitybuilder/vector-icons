import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Close: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/>
  </Svg>
)

export default React.memo(Close)

