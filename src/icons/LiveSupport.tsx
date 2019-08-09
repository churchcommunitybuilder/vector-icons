import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const LiveSupport: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M14.8559286,19.985258 C15.2371617,20.0760825 15.6423942,20.125 16.0625,20.125 C18.3092387,20.125 20.1305804,18.7258898 20.1305804,17 C20.1305804,15.2741102 18.3092387,13.875 16.0625,13.875 C13.8157613,13.875 11.9944196,15.2741102 11.9944196,17 C11.9944196,18.1179964 12.7586884,19.09887 13.9077796,19.6511395 C13.9317398,19.8781438 13.9151268,20.2528731 13.6999998,20.75 C14.3736517,20.5209606 14.7056433,20.1899755 14.8559286,19.985258 Z M14.8435221,20.883281 C14.5368191,21.2725976 13.79106,21.8403089 12.0125,22 C13.0787523,21.2980277 13.1469084,20.5959334 13.0928714,20.2398815 C11.8247197,19.5129604 11,18.3325784 11,17 C11,14.790861 13.2665585,13 16.0625,13 C18.8584415,13 21.125,14.790861 21.125,17 C21.125,19.209139 18.8584415,21 16.0625,21 C15.6422476,21 15.2339552,20.95954 14.8435221,20.883281 Z M13.6258371,12.5269507 C13.2837567,12.6278473 12.8864463,12.7755072 12.4842153,12.9902914 C12.4830339,12.4753662 12.4815848,11.84375 12.4815848,11.84375 C13.971429,10.3249996 13.971429,9.08453369 13.971429,9.08453369 C13.971429,9.08453369 14.4285714,8.74828339 14.4285714,8.1875 C14.4285714,7.62671661 13.971429,7.28749979 13.971429,7.28749979 C13.971429,7.28749979 15,3.125 11,3.125 C7,3.125 8.02880859,7.28749979 8.02880859,7.28749979 C8.02880859,7.28749979 7.5739235,7.625 7.57407924,8.1875 C7.57423498,8.75 8.02943638,9.08750021 8.02943638,9.08750021 C8.02943638,9.08750021 8.02857154,10.3249996 9.51681083,11.84375 C9.52239419,11.8494478 9.5142855,13.6437504 9.5142855,13.6437504 L4.6008221,15.9591875 C4.34789504,16.0783777 4.14484137,16.4054292 4.14692687,16.6707131 C4.14692687,16.6707131 4.16782924,18.8776779 4.14285714,18.8776779 C4.15467478,18.8776779 7.22662359,18.8770782 10.4597426,18.8764464 C10.6895338,19.3548376 11.0007172,19.7213885 11.323084,20 L4.00087166,20 C3.4481055,20 3,19.5520711 3,19.0013041 L3,16.4986959 C3,15.9471314 3.40373014,15.3055169 3.89905634,15.0669106 L8.37142835,12.9124998 L8.3757062,12.2375004 C7.91428593,11.6750004 7.59670802,11.2350068 7.59670802,11.2350068 C7.3016515,10.8406605 7.03837505,10.1541019 6.96641274,9.61940694 C6.64341958,9.32123515 6.42857143,8.79141488 6.42857143,8.1875 C6.42857143,7.6795473 6.58056552,7.22401276 6.82106158,6.91464646 L6.77142879,5.9375 C6.88571439,3.46250021 8.37162923,2 11.0002548,2 C13.667102,2 15.1142862,3.46250021 15.2285712,5.9375 L15.1789384,6.91464646 C15.4194345,7.22401276 15.5714286,7.6795473 15.5714286,8.1875 C15.5714286,8.791422 15.3565754,9.32124764 15.0335758,9.61941748 C14.9614223,10.155218 14.6971061,10.8441177 14.4032086,11.2350068 C14.4032086,11.2350068 14.0857141,11.6750004 13.6237842,12.2375004 L13.6258371,12.5269507 Z" />
  </Svg>
)

export default React.memo(LiveSupport)
