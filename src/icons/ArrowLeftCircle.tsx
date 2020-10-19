import * as React from 'react'

import { SvgProps } from '../wrappers'
import ArrowRightCircle from './ArrowRightCircle'

const ArrowLeftCircle: React.FC<SvgProps> = (props) => (
  <ArrowRightCircle {...props} rotation={180} />
)

export default React.memo(ArrowLeftCircle)
