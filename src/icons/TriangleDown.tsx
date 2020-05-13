import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const TriangleDown: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path fill={fill} d="M7 9l5 5 5-5z" />
  </Svg>
)

export default React.memo(TriangleDown)
