import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Subtract: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path fill={fill} d="M5 11v2h14v-2z" />
  </Svg>
)

export default React.memo(Subtract)
