import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Childcare: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M9.16283517,4.51767987 C6.74972155,5.43318765 4.89465252,7.48254142 4.24812832,10.0152409 C4.16683033,10.005181 4.08402021,10 4,10 C2.8954305,10 2,10.8954305 2,12 C2,13.1045695 2.8954305,14 4,14 C4.08402021,14 4.16683033,13.994819 4.24812832,13.9847591 C5.13090193,17.4429441 8.26683476,20 12,20 C15.7331652,20 18.8690981,17.4429441 19.7518717,13.9847591 C19.8331697,13.994819 19.9159798,14 20,14 C21.1045695,14 22,13.1045695 22,12 C22,10.8954305 21.1045695,10 20,10 C19.9159798,10 19.8331697,10.005181 19.7518717,10.0152409 C18.8831311,6.61202891 15.8322965,4.08152413 12.1775732,4.00193184 C11.9278642,3.61439624 11.9454095,3.32799455 12.0821361,3.06437148 C12.1072222,3.01600303 12.1208254,2.99756679 12.0953628,3.02478311 C12.1028026,3.01683091 12.1101391,3.00881921 12.1173725,3.00074968 C16.0007123,3.05038252 19.2911688,5.5594911 20.5025799,9.04191321 C21.920167,9.28101442 23,10.514403 23,12 C23,13.485597 21.920167,14.7189856 20.5025799,14.9580868 C19.2789826,18.4755405 15.9343008,21 12,21 C8.06569917,21 4.72101744,18.4755405 3.49742007,14.9580868 C2.07983296,14.7189856 1,13.485597 1,12 C1,10.514403 2.07983296,9.28101442 3.49742007,9.04191321 C4.39283145,6.46788995 6.42410619,4.42562572 8.99109489,3.51526993 C9.00171215,3.84553292 9.05800048,4.18077641 9.16283517,4.51767987 Z M12.3370181,5.61926338 C12.5472931,5.79825786 12.572651,6.11382315 12.3936565,6.32409818 C12.2146621,6.5343732 11.8990968,6.5597311 11.6888217,6.38073662 C9.94103434,4.89295034 9.65957616,3.3913184 10.3067183,2.14356116 C10.4230699,1.91922321 10.5432491,1.75634639 10.6348791,1.65840563 C10.8235364,1.45675491 11.1399437,1.44622172 11.3415944,1.63487908 C11.5432451,1.82353644 11.5537783,2.13994365 11.3651209,2.34159437 C11.3320373,2.37695659 11.2651461,2.46761312 11.1944272,2.60396632 C10.7601185,3.44135861 10.9464688,4.43557245 12.3370181,5.61926338 Z M8.25,11.5 C7.55964406,11.5 7,10.9403559 7,10.25 C7,9.55964406 7.55964406,9 8.25,9 C8.94035594,9 9.5,9.55964406 9.5,10.25 C9.5,10.9403559 8.94035594,11.5 8.25,11.5 Z M15.75,11.5 C15.0596441,11.5 14.5,10.9403559 14.5,10.25 C14.5,9.55964406 15.0596441,9 15.75,9 C16.4403559,9 17,9.55964406 17,10.25 C17,10.9403559 16.4403559,11.5 15.75,11.5 Z M7,14 L17,14 C17,14 15.75,18.0046654 11.9665232,17.9999959 C8.18304639,17.9953264 7,14 7,14 Z"
    />
  </Svg>
)

export default React.memo(Childcare)
