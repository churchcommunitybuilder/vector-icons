import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Location: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M12.5371526,21.6509334 C12.2401911,22.1155635 11.7585191,22.1174426 11.4618428,21.6500475 C11.4618428,21.6500475 5,11.7343035 5,8.49753335 C4.99999361,4.96113913 8.13399518,2.00000604 11.9999884,2 C15.8659817,1.99999396 18.9999936,4.96111727 19,8.49753335 C18.9999942,11.7466243 12.5371526,21.6509334 12.5371526,21.6509334 Z M11.9995339,20.6929044 C11.9995339,20.6929044 17.999995,11.085048 18,8.49753335 C17.9999945,5.45605036 15.3136986,2.99961551 11.9999901,2.99962052 C8.68628158,2.99962552 5.99999452,5.4560685 6,8.49753335 C6,11.0748271 11.9995339,20.6929044 11.9995339,20.6929044 Z M12,11.9962052 C10.3431458,11.9962052 9,10.6535691 9,8.99734361 C9,7.34111811 10.3431458,5.99848206 12,5.99848206 C13.6568542,5.99848206 15,7.34111811 15,8.99734361 C15,10.6535691 13.6568542,11.9962052 12,11.9962052 Z M12,10.9965846 C13.1045695,10.9965846 14,10.1014939 14,8.99734361 C14,7.89319327 13.1045695,6.99810258 12,6.99810258 C10.8954305,6.99810258 10,7.89319327 10,8.99734361 C10,10.1014939 10.8954305,10.9965846 12,10.9965846 Z" />
  </Svg>
)
export default React.memo(Location)
