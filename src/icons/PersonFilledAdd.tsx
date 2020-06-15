import * as React from 'react'

import { Svg, Path, G, SvgProps } from '../wrappers'

const PersonFilledAdd: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 40 40">
    <G transform="translate(-303, -8)">
      <Path
        fill={fill}
        d="M323,8 C334.040745,8.01194141 342.988059,16.9592551 343,28 C343,30.2101016 342.641516,32.3364747 341.979522,34.3241441 C340.329786,32.298246 337.816841,31.0034597 335.001229,31.0000008 C332.02904,31.0000008 329.393627,32.4400302 327.754526,34.6602904 L327.506667,34.5683333 C327.066346,34.3146415 326.771645,33.8679562 326.711667,33.3633333 C326.43393,32.3749014 326.584532,31.3152425 327.126667,30.4433333 C328.525,28.9033333 329.891667,27.0033333 329.891667,22.2516667 C330.062094,20.3369116 329.406611,18.4405241 328.09016,17.0397062 C326.77371,15.6388883 324.92164,14.8670204 323,14.9183333 C321.078646,14.8675049 319.22703,15.6395844 317.910953,17.0403433 C316.594877,18.4411021 315.939611,20.3372083 316.11,22.2516667 C316.11,27.0033333 317.476667,28.9033333 318.875,30.4433333 C319.417135,31.3152425 319.567737,32.3749014 319.29,33.3633333 C319.230022,33.8679562 318.93532,34.3146415 318.495,34.5683333 L318.495,34.5683333 L317.371667,34.9833333 C316.54548,35.2622177 315.726245,35.5606222 314.914643,35.8782653 C313.463504,36.4462093 311.110899,39.0806152 311.425831,39.4006055 C314.465151,42.4887453 318.630576,44.2487089 323.000833,44.2487089 C324.30527,44.2487089 325.591458,44.0919128 326.834898,43.7898024 C327.412931,45.0341079 328.267478,46.1241118 329.319397,46.9811075 C327.33343,47.6420288 325.208519,48 323,48 C311.954305,48 303,39.045695 303,28 C303,16.954305 311.954305,8 323,8 Z M335,32 C339.416029,32.0054251 342.994575,35.5839711 343,40 C343,44.418278 339.418278,48 335,48 C330.581722,48 327,44.418278 327,40 C327,35.6650857 330.447838,32.1354571 334.750821,32.0038068 L335,32 L335,32 Z M335.202778,35.3055564 L335.03526,35.3190806 L334.924191,35.3435848 C334.489095,35.4652267 334.169792,35.864716 334.169792,36.3385425 L334.169792,36.3385425 L334.169926,37.1938984 L334.169926,37.1938984 L334.168333,39.1322231 L331.374653,39.1336814 C330.804306,39.1336814 330.341667,39.5963207 330.341667,40.1666675 L330.355191,40.3341854 C330.435272,40.8249157 330.861341,41.1996536 331.374653,41.1996536 L334.168333,41.1991675 L334.169792,43.9947925 L334.175855,44.1073206 C334.223941,44.5508472 334.552973,44.9102974 334.981225,45.0039458 L335.045,45.013 L335.206234,44.9513647 C335.485234,44.8393351 335.763635,44.7145155 336.036257,44.5793143 L336.061,44.566 L336.084182,44.5336368 C336.1611,44.4081211 336.211962,44.2649239 336.22923,44.1115827 L336.235764,43.9947925 L336.235278,41.1991675 L339.030903,41.1996536 C339.297065,41.1996536 339.53977,41.098901 339.722948,40.9334675 L339.75,40.905 L339.841322,40.7081172 C339.883484,40.6124916 339.924169,40.5162801 339.963331,40.4197256 L340.063,40.163 L340.050365,39.9991496 L340.02586,39.888081 C339.904219,39.4529847 339.504729,39.1336814 339.030903,39.1336814 L339.030903,39.1336814 L336.235278,39.1322231 L336.235764,36.3385425 L336.229701,36.2260144 C336.1736,35.7085667 335.735101,35.3055564 335.202778,35.3055564 L335.202778,35.3055564 Z"
      />
    </G>
  </Svg>
)

export default React.memo(PersonFilledAdd)
