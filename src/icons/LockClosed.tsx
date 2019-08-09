import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const LockClosed: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M16.5,10 L16.9905224,10 C18.652611,10 19.8891617,11.3300595 19.7502373,12.997152 L19.2497627,19.002848 C19.1118226,20.6581293 17.6576211,22 15.9966488,22 L8.00335124,22 C6.34464615,22 4.88916171,20.6699405 4.75023733,19.002848 L4.24976267,12.997152 C4.11182256,11.3418707 5.33663106,10 7.00947762,10 L7.5,10 L7.5,6.49206601 C7.5,4.01116646 9.51977567,2 12,2 C14.4852814,2 16.5,4.01698639 16.5,6.49206601 L16.5,10 Z M15.5,10 L15.5,6.49206601 C15.5,4.56745598 13.9311795,3 12,3 C10.0697459,3 8.5,4.56576287 8.5,6.49206601 L8.5,10 L15.5,10 Z M5.24630843,12.9141066 L5.74678309,18.9198025 C5.84215438,20.064258 6.86036976,21 8.00335124,21 L15.9966488,21 C17.1363659,21 18.1583709,20.057955 18.2532169,18.9198025 L18.7536916,12.9141066 C18.8436207,11.8349566 18.0725218,11 16.9905224,11 L7.00947762,11 C5.92584591,11 5.15660608,11.8376784 5.24630843,12.9141066 Z M13.3474286,14.62 C13.3474286,15.34375 13.1687143,17.58 12,17.58 C10.7965714,17.58 10.6525714,15.34375 10.6525714,14.62 C10.6525714,13.89625 11.2555714,13.31 12,13.31 C12.7444286,13.31 13.3474286,13.89625 13.3474286,14.62 Z" />
  </Svg>
)

export default React.memo(LockClosed)

