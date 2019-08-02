import * as React from 'react'
import Svg, { Circle, Polygon, SvgProps } from 'react-native-svg'

const Close: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Circle fill="#f8f9fa" cx="16" cy="16" r="16" />
    <Polygon
      fill="#8697a3"
      points="22 11.2 20.8 10 16 14.8 11.2 10 10 11.2 14.8 16
        10 20.8 11.2 22 16 17.2 20.8 22 22 20.8 17.2 16"
    />
  </Svg>
)

export default React.memo(Close)
