import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Menu: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path fill={fill} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </Svg>
)

export default React.memo(Menu)
