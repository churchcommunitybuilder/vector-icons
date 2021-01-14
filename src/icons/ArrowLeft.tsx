import * as React from 'react'

import { Svg, Polygon, G, SvgProps } from '../wrappers'

const ArrowLeft: React.FC<SvgProps> = ({ rotation, fill, ...props }) => (
  <Svg {...props}>
    <G rotation={rotation} originX={12} originY={12}>
      <Polygon
        fill={fill}
        points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13"
      />
    </G>
  </Svg>
)

export default React.memo(ArrowLeft)
