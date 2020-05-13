import * as React from 'react'

import { SvgProps, G } from '../wrappers'
import MoreVertical from './MoreVertical'

const More: React.FC<SvgProps> = (props) => (
  <MoreVertical {...props} rotation={90} />
)

export default React.memo(More)
