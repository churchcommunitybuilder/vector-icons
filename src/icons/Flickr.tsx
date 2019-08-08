import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Flickr: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M9.333 21.333c-2.946 0-5.333-2.388-5.333-5.333s2.388-5.333 5.333-5.333c2.946 0 5.333 2.388 5.333 5.333s-2.388 5.333-5.333 5.333zM22.667 21.333c-2.946 0-5.333-2.388-5.333-5.333s2.388-5.333 5.333-5.333c2.946 0 5.333 2.388 5.333 5.333s-2.388 5.333-5.333 5.333z" />
  </Svg>
)

export default React.memo(Flickr)

