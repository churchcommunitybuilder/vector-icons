import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const CameraFilled: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path
      fill={fill}
      d="M9.333 5.333l2.667-2.667h8l2.667 2.667h4c1.467 0 2.667 1.2 2.667 2.667v16c0 1.467-1.2 2.667-2.667 2.667h-21.333c-1.467 0-2.667-1.2-2.667-2.667v-16c0-1.467 1.2-2.667 2.667-2.667h4zM16 22.667c3.68 0 6.667-2.986 6.667-6.667s-2.986-6.667-6.667-6.667c-3.68 0-6.667 2.986-6.667 6.667s2.986 6.667 6.667 6.667zM25.333 10.667c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333zM16 21.333c-2.946 0-5.333-2.388-5.333-5.333s2.388-5.333 5.333-5.333c2.946 0 5.333 2.388 5.333 5.333s-2.388 5.333-5.333 5.333z"
    />
  </Svg>
)

export default React.memo(CameraFilled)
