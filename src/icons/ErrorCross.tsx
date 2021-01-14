import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const ErrorCross: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 80 80">
    <Path
      fill={fill}
      d="M40 76c19.882 0 36-16.118 36-36S59.882 4 40 4 4 20.118 4 40s16.118 36 36 36zm0-76c22.091 0 40 17.909 40 40 0 21.87-17.552 39.641-39.339 39.995L40 80C17.909 80 0 62.091 0 40S17.909 0 40 0zm14.411 23L40.119 37.29 25.831 23.002l-2.833 2.825 14.293 14.292L23 54.41l2.825 2.833L40.12 42.948l14.294 14.293 2.828-2.828-14.293-14.294 14.291-14.29L54.411 23z"
    />
  </Svg>
)

export default React.memo(ErrorCross)
