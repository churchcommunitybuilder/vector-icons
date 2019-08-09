import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const VolumeDown: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M13.5819842,3.42888589 C14.6565799,2.51908975 15.9987951,3.1395326 15.9987951,4.54736988 L15.9987951,19.4517776 C15.9987951,20.8564603 14.6579041,21.4869038 13.5927252,20.5653673 L10.6268824,17.9994769 C4.81575332,17.9336095 1.99879512,16.3078195 1.99879512,12.0015735 C1.99879512,7.684423 4.86136305,5.993741 10.6328412,5.92574963 L13.5819842,3.42888589 Z M14.9987951,19.4517776 L14.9987951,4.54736988 C14.9987951,3.99219009 14.6537623,3.83174234 14.2281429,4.19208902 L11.0018446,6.92360367 C5.99889246,6.92360367 2.99879512,8.00157348 2.99879512,12.0015735 C2.99879512,16.0015735 5.99889246,17.0015735 11.0018446,17.0015735 L14.2469993,19.8091098 C14.6580174,20.1647009 14.9987951,20.0083404 14.9987951,19.4517776 Z M17.8412303,13.6911318 C17.6543913,13.8944684 17.3380914,13.9078423 17.1347548,13.7210033 C16.9314182,13.5341642 16.9180443,13.2178643 17.1048834,13.0145277 C17.357704,12.7393834 17.5,12.381462 17.5,12 C17.5,11.6203223 17.3590438,11.2639551 17.1083532,10.9892614 C16.9222061,10.7852911 16.9366547,10.4690385 17.140625,10.2828914 C17.3445952,10.0967444 17.6608478,10.1111929 17.8469949,10.3151632 C18.2642254,10.7723426 18.5,11.3684307 18.5,12 C18.5,12.6345462 18.2619902,13.2332196 17.8412303,13.6911318 Z" />
  </Svg>
)

export default React.memo(VolumeDown)
