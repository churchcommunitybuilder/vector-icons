import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const LocationFilled: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 032 32">
    <Path
      fill={fill}
      d="M16.716 28.868c-0.396 0.619-1.038 0.622-1.434-0.001 0 0-8.616-13.221-8.616-17.537 0-4.715 4.179-8.663 9.333-8.663s9.333 3.948 9.333 8.663c0 4.332-8.617 17.538-8.617 17.538zM16 15.995c2.209 0 4-1.79 4-3.998s-1.791-3.998-4-3.998c-2.209 0-4 1.79-4 3.998s1.791 3.998 4 3.998z"
    />
  </Svg>
)

export default React.memo(LocationFilled)
