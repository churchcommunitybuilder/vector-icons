import * as React from 'react'
import Svg, { Polygon, SvgProps } from 'react-native-svg'

const Check: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Polygon
      points="8.9999939 16.2 4.7999939 12 3.3999939 13.4 8.9999939 19 20.9999939 7 19.5999939 5.6"
    />
  </Svg>
)

export default React.memo(Check)
