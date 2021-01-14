import React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const ChevronLeft: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path
      fill={fill}
      d="M20.533 9.867L18.666 8l-8 8 8 8 1.867-1.867L14.4 16z"
    />
  </Svg>
)

export default React.memo(ChevronLeft)
