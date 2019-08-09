import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Tumblr: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M17.488 2.667v6.166h6.136v4.761h-6.136v6.837c0 1.547-0.019 2.439 0.143 2.878 0.162 0.436 0.569 0.889 1.011 1.15 0.589 0.354 1.258 0.531 2.014 0.531 1.344 0 2.681-0.438 4.010-1.316v4.204c-1.132 0.536-2.16 0.915-3.080 1.129-0.921 0.215-1.914 0.325-2.983 0.325-1.213 0-1.93-0.154-2.861-0.461-0.933-0.31-1.728-0.75-2.386-1.317-0.661-0.571-1.115-1.177-1.37-1.818-0.255-0.643-0.382-1.573-0.382-2.792v-9.352h-3.606v-3.777c1.042-0.34 2.251-0.827 2.993-1.462 0.745-0.637 1.342-1.399 1.79-2.29 0.452-0.889 0.761-2.023 0.931-3.398l3.774-0.001z" />
  </Svg>
)

export default React.memo(Tumblr)
