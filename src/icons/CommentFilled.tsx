import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const CommentFilled: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M12.79 26.355c-0.808 1.038-2.772 2.552-7.456 2.978 2.808-1.872 2.988-3.744 2.845-4.694-3.34-1.938-5.512-5.086-5.512-8.64 0-5.891 5.97-10.667 13.333-10.667s13.333 4.776 13.333 10.667c0 5.891-5.97 10.667-13.333 10.667-1.107 0-2.182-0.108-3.21-0.311z" />
  </Svg>
)

export default React.memo(CommentFilled)

