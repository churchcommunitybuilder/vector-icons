import * as React from 'react'
import { Svg, G, Path, SvgProps } from '../wrappers'

const MoreVertical: React.FC<SvgProps> = ({ rotation, fill, ...props }) => (
  <Svg {...props}>
    <G rotation={rotation} originX={12} originY={12}>
      <Path
        fill={fill}
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </G>
  </Svg>
)

export default React.memo(MoreVertical)
