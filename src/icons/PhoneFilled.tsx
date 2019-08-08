import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const PhoneFilled: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M16.5596455,13.0227599 L20.7536245,17.2069831 C21.0762062,17.5325093 21.0824417,18.0452234 20.7698367,18.3760861 L20.5499323,18.6117129 C19.5048671,19.731556 18.320543,21 16.5,21 C14.2200961,21 11.5658632,19.3526648 8,15.8000002 C4.56384296,12.300691 2.95841657,9.65953614 3.00081779,7.50277087 C3.03615213,5.70149832 4.20800532,4.6087482 5.241431,3.64489498 C5.38692537,3.50901959 5.53034124,3.3751967 5.66835304,3.2421948 C5.83089103,3.08579443 6.0433128,3 6.25,3 C6.5001651,3.001642 6.72048514,3.09400442 6.87803475,3.2540993 L11.0558015,7.46007891 C11.2145982,7.61894228 11.3014791,7.83199161 11.2998163,8.05776643 C11.2981536,8.28313074 11.207947,8.49535907 11.0445777,8.65381195 L9.76672144,9.88941595 C9.76713714,9.93826541 9.83905292,10.3779106 10.4991816,11.2674633 C11.6020289,12.7534721 13.3683305,14.212388 14.0650407,14.211567 C14.1760321,14.151634 15.3603562,13.0075714 15.3603562,13.0075714 C15.7062171,12.6902552 16.2453776,12.7087277 16.5596455,13.0227599 Z" />
  </Svg>
)

export default React.memo(PhoneFilled)

