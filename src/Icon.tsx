import * as React from 'react'

import * as Icons from './icons'
import { SvgProps } from './wrappers'

export type IconName = keyof typeof Icons

export interface IconProps extends SvgProps {
  name: IconName
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    throw Error(`${name} is not a valid icon!`)
  }

  return <IconComponent {...props} />
}

Icon.defaultProps = {
  fill: 'rgba(0, 0, 0, 0.54)',
  height: 24,
  stroke: undefined,
  strokeWidth: 1,
  viewBox: '0 0 24 24',
  width: 24,
}

export default React.memo(Icon)
