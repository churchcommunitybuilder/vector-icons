import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Check: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path fill={fill} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </Svg>
)

export default React.memo(Check)
