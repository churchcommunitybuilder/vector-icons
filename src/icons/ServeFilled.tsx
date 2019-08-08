import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const ServeFilled: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M12,7 C11.33,5.268 9.453,4 7.5,4 C4.957,4 3,5.932 3,8.5 C3,12.029 6.793,14.758 12,20 C17.207,14.758 21,12.029 21,8.5 C21,5.932 19.043,4 16.5,4 C14.545,4 12.67,5.268 12,7 Z" />
  </Svg>
)

export default React.memo(ServeFilled)

