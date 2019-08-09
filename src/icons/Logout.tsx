import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Logout: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M16,6.25468928 L16,5.07025756 C18.3912055,6.45349524 20,9.03887058 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,9.03887058 5.60879452,6.45349524 8,5.07025756 L8,6.25468928 C6.1865159,7.51963541 5,9.62125489 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,9.62125489 17.8134841,7.51963541 16,6.25468928 Z M12.5,12 C12.5,12.2761424 12.2761424,12.5 12,12.5 C11.7238576,12.5 11.5,12.2761424 11.5,12 L11.5,4 C11.5,3.72385763 11.7238576,3.5 12,3.5 C12.2761424,3.5 12.5,3.72385763 12.5,4 L12.5,12 Z" />
  </Svg>
)

export default React.memo(Logout)
