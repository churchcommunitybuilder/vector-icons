import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Serve: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M16.5 4C19.603 4 22 6.388 22 9.5c0 .995-.25 1.952-.738 2.916-.645 1.27-1.666 2.517-3.369 4.229-.58.582-4.061 3.93-5.184 5.06l-.709.714-.71-.714c-1.122-1.13-4.604-4.478-5.183-5.06-1.703-1.712-2.724-2.96-3.369-4.23C2.25 11.453 2 10.496 2 9.5 2 6.388 4.397 4 7.5 4c1.75 0 3.4.8 4.501 2.1A5.925 5.925 0 0 1 16.5 4zM12 8c-.67-1.732-2.547-3-4.5-3C4.957 5 3 6.932 3 9.5c0 3.529 3.793 6.258 9 11.5 5.207-5.242 9-7.971 9-11.5C21 6.932 19.043 5 16.5 5c-1.955 0-3.83 1.268-4.5 3z"
    />
  </Svg>
)

export default React.memo(Serve)
