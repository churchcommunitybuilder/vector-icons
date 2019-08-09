import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Widowed: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M15.296,16.6380002 L17.956,7.30000019 L16.668,7.30000019 L14.61,15.0840002 L12.468,7.30000019 L11.502,7.30000019 L9.36,15.0840002 L7.288,7.30000019 L6,7.30000019 L8.66,16.6380002 L9.92,16.6380002 L11.978,9.10600019 L14.036,16.6380002 L15.296,16.6380002 Z" />
  </Svg>
)

export default React.memo(Widowed)
