import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Play: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M10,16.5 L16,12 L10,7.5 L10,16.5 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"
    />
  </Svg>
)

export default React.memo(Play)
