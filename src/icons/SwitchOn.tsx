import * as React from 'react'
import Svg, { Defs, Circle, G, Path, SvgProps, Use } from 'react-native-svg'

const SwitchOn: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 40 24">
    <G fill="none" fillRule="evenodd">
      <Path
        d="M30 19H10c-3.9 0-7-3.1-7-7s3.1-7 7-7h20c3.9 0 7 3.1 7 7s-3.1 7-7 7z"
        fill="rgb(192, 229, 255)"
      />
      <G>
        <Circle id="prefix__b" cx={30} cy={12} r={10} fill="rgb(4, 152, 255)" />
      </G>
    </G>
  </Svg>
)

export default React.memo(SwitchOn)

