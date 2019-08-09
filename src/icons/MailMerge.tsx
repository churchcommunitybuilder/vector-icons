import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const MailMerge: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M10.8220781,7.99998212 L15.494808,11.580221 L20.2619291,7.9972718 C18.2868338,7.99948759 12.8906339,7.9999041 10.8220781,7.99998212 Z M21,8.69349893 L15.7923081,12.6075793 C15.612991,12.7423533 15.3658618,12.7412084 15.1878013,12.6047786 L10,8.62989289 L10,16.0046024 C9.99961425,15.9999467 21,16 21,16 L21,8.69349893 Z M9,7.99539757 C9,7.44565467 9.44748943,7 9.99850233,7 L21.0014977,7 C21.5529553,7 22,7.4556644 22,7.99539757 L22,16.0046024 C22,16.5543453 21.5525106,17 21.0014977,17 L9.99850233,17 C9.44704472,17 9,16.5443356 9,16.0046024 L9,7.99539757 Z M6.5,15 C6.22385763,15 6,14.7761424 6,14.5 C6,14.2238576 6.22385763,14 6.5,14 L7.5,14 C7.77614237,14 8,14.2238576 8,14.5 C8,14.7761424 7.77614237,15 7.5,15 L6.5,15 Z M4.5,12 C4.22385763,12 4,11.7761424 4,11.5 C4,11.2238576 4.22385763,11 4.5,11 L7.5,11 C7.77614237,11 8,11.2238576 8,11.5 C8,11.7761424 7.77614237,12 7.5,12 L4.5,12 Z M2.5,9 C2.22385763,9 2,8.77614237 2,8.5 C2,8.22385763 2.22385763,8 2.5,8 L7.5,8 C7.77614237,8 8,8.22385763 8,8.5 C8,8.77614237 7.77614237,9 7.5,9 L2.5,9 Z" />
  </Svg>
)

export default React.memo(MailMerge)
