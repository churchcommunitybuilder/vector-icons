import * as React from 'react'

import { SvgProps } from '../wrappers'
import ArrowRightCircle from './ArrowRightCircle'

const ArrowDownCircle: React.FC<SvgProps> = (props) => (
  <ArrowRightCircle {...props} rotation={90} />
)

export default React.memo(ArrowDownCircle)
