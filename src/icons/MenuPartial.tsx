import * as React from 'react'
import Svg, { Defs, Use, Path, SvgProps } from 'react-native-svg'

const MenuPartial: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Defs>
      <Path
        d="M15 22h10v-2H15v2zm-8-5h18v-2H7v2zm4-7v2h14v-2H11z"
        id="mainPath"
      />
    </Defs>
    <Use
      transform="matrix(-1 0 0 1 32 0)"
      href="#mainPath"
      fillRule="evenodd"
    />
  </Svg>
)

export default React.memo(MenuPartial)

