import * as React from 'react'
import { Svg, Polygon, SvgProps } from '../wrappers'

const ChevronUp: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Polygon fill={fill} points="12 8 6 14 7.4 15.4 12 10.8 16.6 15.4 18 14" />
  </Svg>
)

export default React.memo(ChevronUp)
