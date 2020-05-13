import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const CustomizableFields: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M4,5.99253976 L4,18.0074602 C4,19.0999967 4.89728601,20 5.99253976,20 L18.0074602,20 C19.0999967,20 20,19.102714 20,18.0074602 L20,5.99253976 C20,4.9000033 19.102714,4 18.0074602,4 L5.99253976,4 C4.9000033,4 4,4.89728601 4,5.99253976 Z M3,5.99253976 C3,4.33980569 4.35292554,3 5.99253976,3 L18.0074602,3 C19.6601943,3 21,4.35292554 21,5.99253976 L21,18.0074602 C21,19.6601943 19.6470745,21 18.0074602,21 L5.99253976,21 C4.33980569,21 3,19.6470745 3,18.0074602 L3,5.99253976 Z"
    />
  </Svg>
)

export default React.memo(CustomizableFields)
