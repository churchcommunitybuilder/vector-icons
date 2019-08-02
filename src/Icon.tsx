import * as React from 'react'
import { SvgProps } from 'react-native-svg';

import * as Icons from './icons'

export type IconName = keyof typeof Icons

export interface IconProps extends SvgProps {
  name: IconName
}

const Icon: React.FC<IconProps> = ({
  name,
  ...props
}) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    throw Error(`${name} is not a valid icon!`)
  }

  return <IconComponent {...props} />
}

Icon.defaultProps = {
  fill: 'rgba(0, 0, 0, 0.54)',
  viewBox: '0 0 24 24',
  height: 24,
  width: 24,
}

export default React.memo(Icon)
