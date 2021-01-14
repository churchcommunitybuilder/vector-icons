import React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const ChevronRight: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path fill={fill} d="M11.467 9.867L13.334 8l8 8-8 8-1.867-1.867L17.6 16z" />
  </Svg>
)
export default React.memo(ChevronRight)
