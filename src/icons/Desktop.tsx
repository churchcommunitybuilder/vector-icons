import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Desktop: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M10.1000004,18 L9.19999981,19.9993896 L14.8000002,20 L13.8999996,18 L15,18 L15.9231071,20.0836 C16.1442978,20.5828629 15.8845278,21 15.3361152,21 L8.66578277,21 C8.11396236,21 7.85430539,20.5897138 8.07821113,20.0836 L9,18 L10.1000004,18 Z M2,6.00276013 C2,4.89666625 2.89821238,4 3.99079514,4 L20.0092049,4 C21.1086907,4 22,4.89354265 22,6.00276013 L22,16.0014977 C22,16.5529553 21.5446944,17 21.0081969,17 L2.99180311,17 C2.44404538,17 2,16.5525106 2,16.0014977 L2,6.00276013 Z M3,5.99754465 L3,14 L21,14 L21,5.99754465 C21,5.4463114 20.5552407,5 20.0066023,5 L3.99339768,5 C3.44494629,5 3,5.44661595 3,5.99754465 Z M3,15 L3,15.5 C3,15.7680664 3.22395152,16 3.50020972,16 L20.4997903,16 C20.7724135,16 21,15.7761424 21,15.5 L21,15 L3,15 Z" />
  </Svg>
)

export default React.memo(Desktop)

