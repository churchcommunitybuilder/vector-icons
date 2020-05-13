import * as React from 'react'
import { Svg, Polygon, SvgProps } from '../wrappers'

const ChevronDown: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Polygon
      fill={fill}
      points="16.6 8.59997559 12 13.1999756 7.4 8.59997559 6 9.99997559 12 15.9999756 18 9.99997559"
    />
  </Svg>
)

export default React.memo(ChevronDown)
