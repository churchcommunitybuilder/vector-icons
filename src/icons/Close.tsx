import * as React from 'react'
import { Svg, Path, G, SvgProps } from '../wrappers'

const Close: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 18 18">
    <G translateX={3} translateY={3}>
      <Path
        fill={fill}
        d="M0.345136427,1.97064796 C0.0512724622,1.68682465 -0.0665821609,1.26652513 0.0368700763,0.871291856 C0.140322314,0.476058585 0.448981834,0.167399065 0.844215105,0.0639468273 C1.23944838,-0.0395054099 1.6597479,0.0783492132 1.94357121,0.372213178 L5.74070164,4.16934361 C5.85099527,4.27929278 6.0294515,4.27929278 6.13974512,4.16934361 L9.93687556,0.372213178 C10.2206989,0.0783492132 10.6409984,-0.0395054099 11.0362317,0.0639468273 C11.4314649,0.167399065 11.7401245,0.476058585 11.8435767,0.871291856 C11.9470289,1.26652513 11.8291743,1.68682465 11.5353103,1.97064796 L7.73817991,5.7677784 C7.62823074,5.87807202 7.62823074,6.05652825 7.73817991,6.16682187 L11.5353103,9.96395231 C11.8291743,10.2477756 11.9470289,10.6680751 11.8435767,11.0633084 C11.7401245,11.4585417 11.4314649,11.7672012 11.0362317,11.8706534 C10.6409984,11.9741057 10.2206989,11.8562511 9.93687556,11.5623871 L6.13974512,7.76525666 C6.0294515,7.65530749 5.85099527,7.65530749 5.74070164,7.76525666 L1.94357121,11.5623871 C1.50001247,11.9907905 0.794953636,11.9846637 0.358906733,11.5486168 C-0.0771401693,11.1125699 -0.08326694,10.4075111 0.345136427,9.96395231 L4.14226686,6.16682187 C4.25221603,6.05652825 4.25221603,5.87807202 4.14226686,5.7677784 L0.345136427,1.97064796 Z"
      />
    </G>
  </Svg>
)

export default React.memo(Close)
