import * as React from 'react'

import { Svg, SvgProps, G, Path } from '../wrappers'

const CalendarMonthView: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 24 24">
    <G transform="translate(3.000000, 4.000000)">
      <Path
        fill={fill}
        d="M17,14 C17.5522847,14 18,14.4477153 18,15 C18,15.5522847 17.5522847,16 17,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 C-6.76353751e-17,14.4477153 0.44771525,14 1,14 L17,14 Z M17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 L18,11 C18,11.5522847 17.5522847,12 17,12 L1,12 C0.44771525,12 6.76353751e-17,11.5522847 0,11 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L17,0 Z"
      />
    </G>
  </Svg>
)

export default React.memo(CalendarMonthView)
