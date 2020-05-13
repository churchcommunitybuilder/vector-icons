import * as React from 'react'
import { Svg, Circle, SvgProps } from '../wrappers'

const Dot: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Circle fill={fill} cx={12} cy={12} r={5} />
  </Svg>
)

export default React.memo(Dot)
