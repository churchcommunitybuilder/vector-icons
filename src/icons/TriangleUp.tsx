import * as React from 'react'
import { Svg, Polygon, SvgProps } from '../wrappers'

const TriangleUp: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Polygon fill={fill} points="7 14 12 9 17 14" />
  </Svg>
)

export default React.memo(TriangleUp)
