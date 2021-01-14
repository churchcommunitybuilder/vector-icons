import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const NearMeFilled: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path fill={fill} d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </Svg>
)

export default React.memo(NearMeFilled)
