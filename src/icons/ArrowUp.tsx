import * as React from 'react'
import { SvgProps } from '../wrappers'

import ArrowLeft from './ArrowLeft'

const ArrowUp: React.FC<SvgProps> = (props) => (
  <ArrowLeft {...props} rotation={90} />
)

export default React.memo(ArrowUp)
