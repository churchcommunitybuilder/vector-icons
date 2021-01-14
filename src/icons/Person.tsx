import * as React from 'react'
import { Svg, G, SvgProps, Path } from '../wrappers'

const Person: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 18 18">
    <G transform="translate(1, 1)">
      <Path
        fill={fill}
        d="M8.05664336,8.44444444 C9.91046629,8.44444444 11.4132867,9.93682861 11.4132867,11.7777778 C11.4132867,11.9005077 11.3130987,12 11.1895105,12 L11.1895105,12 L4.92377622,12 C4.80018803,12 4.7,11.9005077 4.7,11.7777778 C4.7,9.93682861 6.20282042,8.44444444 8.05664336,8.44444444 Z M8.05664336,4 C9.23073122,4 10.1825175,4.94517664 10.1825175,6.11111111 C10.1825175,7.27704558 9.23073122,8.22222222 8.05664336,8.22222222 C6.8825555,8.22222222 5.93076923,7.27704558 5.93076923,6.11111111 C5.93076923,4.94517664 6.8825555,4 8.05664336,4 Z"
      />
    </G>
  </Svg>
)

export default React.memo(Person)
