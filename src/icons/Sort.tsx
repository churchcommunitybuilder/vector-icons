import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Sort: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M12,19.4 L8,15.4 L9.4,14 L12,16.6 L14.6,14 L16,15.4 L12,19.4 Z M12,4 L16,8 L14.6,9.4 L12,6.8 L9.4,9.4 L8,8 L12,4 Z"
    />
  </Svg>
)

export default React.memo(Sort)
