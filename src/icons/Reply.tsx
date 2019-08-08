import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Reply: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M10,5 L10,9 C17,10 20,15 21,20 C18.5,16.5 15,15.1 10,15 L10,19 L3,12 L10,5 Z M4.42999983,12 L9,16.5699997 L9,13.9940867 C11.1776733,13.9940867 15.3181763,13.9940867 18.7741575,16.3794627 C15.9854126,10.7282104 11.1575928,10.1281128 9,9.86999989 L9,7.42999983 L4.42999983,12 Z" />
  </Svg>
)

export default React.memo(Reply)

