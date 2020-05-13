import * as React from 'react'
import { SvgProps } from '../wrappers'

import ArrowLeft from './ArrowLeft'

const ArrowRight: React.FC<SvgProps> = (props) => (
  <ArrowLeft {...props} rotation={180} />
)

export default React.memo(ArrowRight)
