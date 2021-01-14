import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const WatchLive: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M21,6 L13.41,6 L16.7,2.71 L16,2 L12,6 L8,2 L7.29,2.71 L10.59,6 L3,6 C1.9,6 1,6.89 1,8 L1,20 C1,21.1 1.9,22 3,22 L21,22 C22.1,22 23,21.1 23,20 L23,8 C23,6.89 22.1,6 21,6 Z M21,21 L3,21 C2.44771525,21 2,20.5522847 2,20 L2,8 C2,7.44771525 2.44771525,7 3,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,20 C22,20.5522847 21.5522847,21 21,21 Z M9,10 L9,18 L16,14 L9,10 Z"
    />
  </Svg>
)

export default React.memo(WatchLive)
