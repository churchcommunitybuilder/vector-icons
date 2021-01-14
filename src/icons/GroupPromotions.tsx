import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const GroupPromotions: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M17.2059142,21.404368 C17.5363988,21.6447205 18,21.4086434 18,21 L18,13 C18,12.7238576 17.7761424,12.5 17.5,12.5 C17.2238576,12.5 17,12.7238576 17,13 L17,20.018115 L12.2940858,16.595632 C12.1187606,16.4681227 11.8812394,16.4681227 11.7059142,16.595632 L7,20.018115 L7,13 C7,12.7238576 6.77614237,12.5 6.5,12.5 C6.22385763,12.5 6,12.7238576 6,13 L6,21 C6,21.4086434 6.46360119,21.6447205 6.79408585,21.404368 L12,17.6182487 L17.2059142,21.404368 Z M12,13.5 C8.6862915,13.5 6,10.8137085 6,7.5 C6,4.1862915 8.6862915,1.5 12,1.5 C15.3137085,1.5 18,4.1862915 18,7.5 C18,10.8137085 15.3137085,13.5 12,13.5 Z M12,12.5 C14.7614237,12.5 17,10.2614237 17,7.5 C17,4.73857625 14.7614237,2.5 12,2.5 C9.23857625,2.5 7,4.73857625 7,7.5 C7,10.2614237 9.23857625,12.5 12,12.5 Z"
    />
  </Svg>
)

export default React.memo(GroupPromotions)
