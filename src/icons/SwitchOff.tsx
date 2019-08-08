import React from 'react'
import Svg, { Defs, Circle, G, Path, SvgProps, Use } from 'react-native-svg'

const SwitchOff: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 40 24">
    <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <Path d="M30,19 L10,19 C6.1,19 3,15.9 3,12 C3,8.1 6.1,5 10,5 L30,5 C33.9,5 37,8.1 37,12 C37,15.9 33.9,19 30,19 Z" fill="#9E9E9E" />
      <G>
        <Circle cx={10} cy={12} r={10} fill="#F5F5F5" fillRule="evenodd" />
      </G>
    </G>
  </Svg>
)

export default React.memo(SwitchOff)
