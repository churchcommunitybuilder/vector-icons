import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Home: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path id="a" d="M20.002 8.002l2.015 1.274a.5.5 0 0 1-.53.848l-1.483-.928-.002-.467v10.269a1 1 0 0 1-1 1.002h-14c-.552 0-1-.456-1-1.002V8l8-5 8 5v.002zm-5 10.998h4V8.6l-7-4.4-7 4.4V19h4v-4c.006-2.013 1.895-3 3-3s2.995 1.001 3 3v4zm-5 1h4v-5c.016-1.494-1.448-2-2-2s-1.961.51-2 2v5zm-6-12l-.005 1.197-1.482.927a.5.5 0 1 1-.53-.848L4.002 8z"/>
  </Svg>
)

export default React.memo(Home)

