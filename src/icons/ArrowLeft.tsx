import * as React from 'react'
import Svg, { Polygon, SvgProps, G } from 'react-native-svg'

const ArrowLeft: React.FC<SvgProps & { rotation?: number }> = props => (
  <Svg {...props}>
    <G rotation={props.rotation} originX={12} originY={12}>
      <Polygon points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13" />
    </G>
  </Svg>
)

export default React.memo(ArrowLeft)

