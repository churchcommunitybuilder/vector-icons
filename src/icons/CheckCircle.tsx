import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const CheckCircle: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 1C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-5.354-9.646l3.5 3.5.354.353.354-.353 7.5-7.5-.708-.708-7.5 7.5h.708l-3.5-3.5-.708.708z"
    />
  </Svg>
)

export default React.memo(CheckCircle)
