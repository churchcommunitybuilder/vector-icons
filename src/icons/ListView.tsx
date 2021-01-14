import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const ListView: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M3,14 L7,14 L7,10 L3,10 L3,14 L3,14 Z M3,20 L7,20 L7,16 L3,16 L3,20 L3,20 Z M3,8 L7,8 L7,4 L3,4 L3,8 L3,8 Z M9,14 L21,14 L21,10 L9,10 L9,14 L9,14 Z M9,20 L21,20 L21,16 L9,16 L9,20 L9,20 Z M9,4 L9,8 L21,8 L21,4 L9,4 L9,4 Z"
    />
  </Svg>
)

export default React.memo(ListView)
