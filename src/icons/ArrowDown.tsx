import * as React from 'react'
import { SvgProps } from 'react-native-svg'

import ArrowLeft from './ArrowLeft'

const ArrowDown: React.FC<SvgProps> = props => (
  <ArrowLeft {...props} rotation={270} />
)

export default React.memo(ArrowDown)
