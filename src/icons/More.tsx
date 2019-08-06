import * as React from 'react'
import Svg, { Path, SvgProps, G } from 'react-native-svg'
import MoreVertical from './MoreVertical';

const More: React.FC<SvgProps> = props => (
  <MoreVertical {...props} rotation={90} />
)

export default React.memo(More)

