import React from 'react'
import { Animated } from 'react-native'
import * as RNSvg from 'react-native-svg'
import { SvgProps as RNSvgProps } from 'react-native-svg'

const wrapAnimatedComponent = (OriginalComponent: any) => {
  const AnimatedComponent = Animated.createAnimatedComponent(OriginalComponent)

  return ({ fill, ...rest }) => {
    const Component =
      typeof fill === 'object' ? AnimatedComponent : OriginalComponent

    return <Component fill={fill} {...rest} />
  }
}

export interface SvgProps extends Omit<RNSvgProps, 'fill'> {
  fill: RNSvgProps['fill'] | Animated.AnimatedInterpolation
}

export { default as Svg, G } from 'react-native-svg'
export const Polygon = wrapAnimatedComponent(RNSvg.Polygon)
export const Path = wrapAnimatedComponent(RNSvg.Path)
export const Circle = wrapAnimatedComponent(RNSvg.Circle)
