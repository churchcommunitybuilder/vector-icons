import * as React from 'react'
import Svg, { Defs, Use } from 'react-native-svg'

import { SvgProps, Path } from '../wrappers'

const MenuPartial: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 32 32">
    <Defs>
      <Path
        fill={fill}
        d="M15 22h10v-2H15v2zm-8-5h18v-2H7v2zm4-7v2h14v-2H11z"
        id="mainPath"
      />
    </Defs>
    <Use transform="matrix(-1 0 0 1 32 0)" href="#mainPath" />
  </Svg>
)

export default React.memo(MenuPartial)
