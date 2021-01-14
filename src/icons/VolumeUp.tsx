import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const VolumeUp: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M13.5819842,3.42888589 C14.6565799,2.51908975 15.9987951,3.1395326 15.9987951,4.54736988 L15.9987951,19.4517776 C15.9987951,20.8564603 14.6579041,21.4869038 13.5927252,20.5653673 L10.6268824,17.9994769 C4.81575332,17.9336095 1.99879512,16.3078195 1.99879512,12.0015735 C1.99879512,7.684423 4.86136305,5.993741 10.6328412,5.92574963 L13.5819842,3.42888589 Z M14.9987951,19.4517776 L14.9987951,4.54736988 C14.9987951,3.99219009 14.6537623,3.83174234 14.2281429,4.19208902 L11.0018446,6.92360367 C5.99889246,6.92360367 2.99879512,8.00157348 2.99879512,12.0015735 C2.99879512,16.0015735 5.99889246,17.0015735 11.0018446,17.0015735 L14.2469993,19.8091098 C14.6580174,20.1647009 14.9987951,20.0083404 14.9987951,19.4517776 Z M17.6795179,16.1759758 C17.4233495,16.2790891 17.1320941,16.1550135 17.0289808,15.8988451 C16.9258674,15.6426767 17.049943,15.3514213 17.3061114,15.248308 C18.6207345,14.7191436 19.5,13.4413519 19.5,12 C19.5,10.5582529 18.6208622,9.28044348 17.306183,8.75149206 C17.0499987,8.64841821 16.9258781,8.35718194 17.028952,8.10099765 C17.1320258,7.84481335 17.4232621,7.72069281 17.6794464,7.82376666 C19.3697164,8.50383424 20.5,10.1466792 20.5,12 C20.5,13.8529308 19.3696023,15.49568 17.6795179,16.1759758 Z M17.575797,18.3075579 C17.3078417,18.3743001 17.0365156,18.2111847 16.9697734,17.9432293 C16.9030311,17.6752739 17.0661466,17.4039479 17.3341019,17.3372056 C19.7640295,16.7319599 21.5,14.5396923 21.5,12 C21.5,9.47424564 19.7828669,7.29078649 17.3710407,6.67213214 C17.1035579,6.60352048 16.942341,6.33106208 17.0109527,6.06357927 C17.0795643,5.79609647 17.3520227,5.63487955 17.6195055,5.70349122 C20.4710108,6.43492706 22.5,9.01493389 22.5,12 C22.5,15.0015518 20.448756,17.591962 17.575797,18.3075579 Z M17.8412303,13.6911318 C17.6543913,13.8944684 17.3380914,13.9078423 17.1347548,13.7210033 C16.9314182,13.5341642 16.9180443,13.2178643 17.1048834,13.0145277 C17.357704,12.7393834 17.5,12.381462 17.5,12 C17.5,11.6203223 17.3590438,11.2639551 17.1083532,10.9892614 C16.9222061,10.7852911 16.9366547,10.4690385 17.140625,10.2828914 C17.3445952,10.0967444 17.6608478,10.1111929 17.8469949,10.3151632 C18.2642254,10.7723426 18.5,11.3684307 18.5,12 C18.5,12.6345462 18.2619902,13.2332196 17.8412303,13.6911318 Z"
    />
  </Svg>
)

export default React.memo(VolumeUp)
