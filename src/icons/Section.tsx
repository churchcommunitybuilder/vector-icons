import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Section: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 1024 1024">
    <Path d="M128 469.333h768v85.333h-768v-85.333zM384 341.333v-85.333h512v85.333h-512zM384 768v-85.333h512v85.333h-512z" />
  </Svg>
)

export default React.memo(Section)
