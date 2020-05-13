import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Facebook: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path
      fill={fill}
      d="M23.053 11.298h-4.218v-2.767c0-1.039 0.689-1.281 1.174-1.281h2.977v-4.568l-4.1-0.016c-4.551 0-5.587 3.407-5.587 5.587v3.045h-2.632v4.707h2.632v13.319h5.536v-13.319h3.736l0.483-4.707z"
    />
  </Svg>
)

export default React.memo(Facebook)
