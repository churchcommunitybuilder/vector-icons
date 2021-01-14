import * as React from 'react'
import { Svg, Polygon, SvgProps } from '../wrappers'

const SortDescending: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Polygon
      fill={fill}
      points="8 10.3954468 12 14.4 16 10.3954468 14.6010132 9 12 11.6101685 9.36889648 9"
    />
  </Svg>
)

export default React.memo(SortDescending)
