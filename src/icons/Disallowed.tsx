import * as React from 'react'
import Svg, { Path, SvgProps, G } from 'react-native-svg'

const Disallowed: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <G transform="translate(-56.000000, -680.000000)">
      <Path d="M72,680 C80.836556,680 88,687.163444 88,696 C88,704.836556 80.836556,712 72,712 C63.163444,712 56,704.836556 56,696 C56,687.163444 63.163444,680 72,680 Z M82.5816294,686.832925 L62.8329249,706.581629 C65.2890232,708.711248 68.4940096,710 72,710 C79.7319865,710 86,703.731986 86,696 C86,692.49401 84.7112484,689.289023 82.5816294,686.832925 Z M72,682 C64.2680135,682 58,688.268014 58,696 C58,699.50599 59.2887516,702.710977 61.4183706,705.167075 L81.1670751,685.418371 C78.7109768,683.288752 75.5059904,682 72,682 Z" />
    </G>
  </Svg>
)

export default React.memo(Disallowed)