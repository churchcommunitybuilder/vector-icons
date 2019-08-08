import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Notification: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M10.0154438,5.24976208 C7.65320018,5.99082127 7,8.54231452 7,15.0030494 L4.19246368,18.2482042 C3.83687258,18.6592222 3.99323304,19 4.54979592,19 L19.4542036,19 C20.0093834,19 20.1698311,18.6549672 19.8094845,18.2293477 L17.0779698,15.0030494 C17.0779698,8.52847111 16.3724348,5.9829097 13.9849303,5.24674076 C13.9948778,5.16588815 14,5.08354225 14,5 C14,3.8954305 13.1045695,3 12,3 C10.8954305,3 10,3.8954305 10,5 C10,5.0845831 10.0052506,5.16793985 10.0154438,5.24976208 Z M9.17070571,20 L4.54979592,20 C3.1451132,20 2.51466969,18.659109 3.43620614,17.5939301 L6.00083999,14.6295397 C6.02859132,8.55038194 6.74984284,5.63612099 9.03501016,4.54023707 C9.2562631,3.10163399 10.4994813,2 12,2 C13.4992632,2 14.7416564,3.09979138 14.9644324,4.53662691 C17.2913002,5.63551154 18.0483479,8.56692772 18.0771112,14.6355667 L20.5726876,17.5831891 C21.4824837,18.6577847 20.8620409,20 19.4542036,20 L14.8292943,20 C14.4174579,21.1651924 13.3062188,22 12,22 C10.6937812,22 9.58254212,21.1651924 9.17070571,20 Z M10.2675644,20 C10.6133738,20.5978014 11.2597176,21 12,21 C12.7402824,21 13.3866262,20.5978014 13.7324356,20 L10.2675644,20 Z" />
  </Svg>
)

export default React.memo(Notification)

