import * as React from 'react'
import Svg, { Polygon, SvgProps } from 'react-native-svg'

const SortAscending: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Polygon points="12 9 8 13 9.4 14.4 12 11.8 14.6 14.4 16 13" />
  </Svg>
)

export default React.memo(SortAscending)

