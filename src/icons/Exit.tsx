import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Exit: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M19,6 L18,6 L18,3 L4,3 L4,21 L18,21 L18,18 L19,18 L19,21 C19,21.5522847 18.5522847,22 18,22 L4,22 C3.44771525,22 3,21.5522847 3,21 L3,3 C3,2.44771525 3.44771525,2 4,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,6 Z M13,12.5 L13,11.5 L19.1,11.5 L16.3,8.7 L17,8 L21,12 L17,16 L16.3,15.3 L19.1,12.5 L13,12.5 Z"
    />
  </Svg>
)

export default React.memo(Exit)
