import React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Filter: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path fill={fill} d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
  </Svg>
)

export default React.memo(Filter)
