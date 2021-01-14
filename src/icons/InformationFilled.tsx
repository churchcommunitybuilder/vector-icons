import * as React from 'react'

import { Svg, SvgProps, Path } from '../wrappers'

const InformationFilled: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 18 18">
    <Path
      fill={fill}
      d="M9,0 C4.02943725,0 0,4.02943725 0,9 C0,13.9705627 4.02943725,18 9,18 C13.9705627,18 18,13.9705627 18,9 C17.9946264,4.03166479 13.9683352,0.00537363571 9,0 Z M9.1875,3.75 C9.80882034,3.75 10.3125,4.25367966 10.3125,4.875 C10.3125,5.49632034 9.80882034,6 9.1875,6 C8.56617966,6 8.0625,5.49632034 8.0625,4.875 C8.0625,4.25367966 8.56617966,3.75 9.1875,3.75 Z M10.875,13.875 L7.875,13.875 C7.46078644,13.875 7.125,13.5392136 7.125,13.125 C7.125,12.7107864 7.46078644,12.375 7.875,12.375 L8.4375,12.375 C8.54105339,12.375 8.625,12.2910534 8.625,12.1875 L8.625,8.8125 C8.625,8.70894661 8.54105339,8.625 8.4375,8.625 L7.875,8.625 C7.46078644,8.625 7.125,8.28921356 7.125,7.875 C7.125,7.46078644 7.46078644,7.125 7.875,7.125 L8.625,7.125 C9.45342712,7.125 10.125,7.79657288 10.125,8.625 L10.125,12.1875 C10.125,12.2910534 10.2089466,12.375 10.3125,12.375 L10.875,12.375 C11.2892136,12.375 11.625,12.7107864 11.625,13.125 C11.625,13.5392136 11.2892136,13.875 10.875,13.875 Z"
    />
  </Svg>
)

export default React.memo(InformationFilled)
