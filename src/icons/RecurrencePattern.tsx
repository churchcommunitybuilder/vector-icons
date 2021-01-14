import * as React from 'react'

import { Svg, Path, SvgProps } from '../wrappers'

const RecurrencePattern: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M9.2024842,6.39341376 C9.73130579,6.39341376 10.1600004,6.82735186 10.1600004,7.36259733 C10.1600004,7.89784279 9.73130579,8.33174497 9.2024842,8.33174497 L9.2024842,8.33174497 L8.83633002,8.33174497 C6.94258012,8.33388282 5.40815645,9.88763975 5.40689006,11.8043948 C5.40689006,13.7822313 7.04156169,15.2747187 9.20861231,15.2747187 L9.20861231,15.2747187 L12.857898,15.2747187 C13.2757182,15.2752682 13.6450253,15.5497534 13.7706178,15.9530921 C13.8962103,16.3564307 13.7491346,16.7956386 13.4071293,17.0385674 L13.4071293,17.0385674 L9.75094947,19.6281299 C9.45858937,19.8355898 9.07642063,19.8610134 8.75974769,19.6940693 C8.44307475,19.5271251 8.24459579,19.1955947 8.24496802,18.8342041 L8.24496802,18.8342041 L8.24496802,17.3021755 C8.24511745,17.2077054 8.17769978,17.1270025 8.08563733,17.1114473 C5.31265588,16.7218621 3.31246249,14.2237171 3.51043042,11.3972346 C3.70839834,8.57075213 6.03678029,6.38319259 8.83633002,6.39341376 L8.83633002,6.39341376 Z M15.2379002,3.97833376 C15.5303757,3.77147015 15.9122322,3.74636567 16.2286894,3.91319608 C16.5451466,4.08002649 16.743705,4.41111506 16.7438816,4.77225951 L16.7438816,4.77225951 L16.7438816,6.30506342 C16.7443601,6.39930021 16.8114816,6.47964856 16.9032123,6.49579168 C19.6783983,6.88261079 21.6815301,9.38169292 21.48342,12.2100012 C21.2853099,15.0383095 18.9538662,17.2263531 16.1525197,17.2130746 L16.1525197,17.2130746 L15.7863655,17.2130746 C15.2575439,17.2130746 14.8288493,16.7791118 14.8288493,16.2438663 C14.8288493,15.7086209 15.2575439,15.2747187 15.7863655,15.2747187 L15.7863655,15.2747187 L16.1486896,15.2747187 C18.041842,15.2725823 19.5760188,13.719769 19.5781295,11.8036195 C19.5781295,9.82423234 17.9434579,8.33174497 15.7764073,8.33174497 L15.7764073,8.33174497 L12.1271216,8.33174497 C11.7091879,8.33178391 11.3395121,8.0574614 11.2138353,7.65402955 C11.0881585,7.2505977 11.235519,6.81127152 11.5778903,6.56867158 L11.5778903,6.56867158 Z"
    />
  </Svg>
)

export default React.memo(RecurrencePattern)
