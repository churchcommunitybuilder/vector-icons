import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const RadioOff: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 L12,2 Z M12,20 C7.6,20 4,16.4 4,12 C4,7.6 7.6,4 12,4 C16.4,4 20,7.6 20,12 C20,16.4 16.4,20 12,20 L12,20 Z" />
  </Svg>
)

export default React.memo(RadioOff)

