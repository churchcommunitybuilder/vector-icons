import React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Comment: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M9.178 17.65c.888.227 1.836.35 2.822.35 4.97 0 9-3.134 9-7s-4.03-7-9-7-9 3.134-9 7c0 2.43 1.593 4.572 4.01 5.827.062.168.353 1.123-.31 2.673 1.806-.622 2.369-1.62 2.478-1.85zm.414 1.117C8.986 19.545 7.513 20.68 4 21c2.106-1.404 2.24-2.808 2.134-3.52C3.63 16.026 2 13.665 2 11c0-4.418 4.477-8 10-8s10 3.582 10 8-4.477 8-10 8c-.83 0-1.637-.08-2.408-.233z"
    />
  </Svg>
)

export default React.memo(Comment)
