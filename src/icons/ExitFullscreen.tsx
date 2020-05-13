import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const ExitFullscreen: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M5,16 L8,16 L8,19 L10,19 L10,14 L5,14 L5,16 L5,16 Z M8,8 L5,8 L5,10 L10,10 L10,5 L8,5 L8,8 L8,8 Z M14,19 L16,19 L16,16 L19,16 L19,14 L14,14 L14,19 L14,19 Z M16,8 L16,5 L14,5 L14,10 L19,10 L19,8 L16,8 L16,8 Z"
    />
  </Svg>
)

export default React.memo(ExitFullscreen)
