import * as React from 'react'
import { G } from 'react-native-svg'
import { Svg, SvgProps, Path } from '../wrappers'

const Link: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 24 24">
    <G transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) ">
      <Path
        fill={fill}
        d="M3.9,12 C3.9,10.29 5.29,8.9 7,8.9 L11,8.9 L11,7 L7,7 C4.24,7 2,9.24 2,12 C2,14.76 4.24,17 7,17 L11,17 L11,15.1 L7,15.1 C5.29,15.1 3.9,13.71 3.9,12 Z M8,13 L16,13 L16,11 L8,11 L8,13 Z M17,7 L13,7 L13,8.9 L17,8.9 C18.71,8.9 20.1,10.29 20.1,12 C20.1,13.71 18.71,15.1 17,15.1 L13,15.1 L13,17 L17,17 C19.76,17 22,14.76 22,12 C22,9.24 19.76,7 17,7 Z" id="path-1"
      />
    </G>
  </Svg>
)

export default React.memo(Link)
