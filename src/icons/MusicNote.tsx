import * as React from 'react'
import { Svg, SvgProps, Path } from '../wrappers'

const MusicNote: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 1024 1024">
    <Path
      fill={fill}
      d="M768 597.333v-397.995l-384 115.2v496.128c0 70.692-57.308 128-128 128v0h-21.333c-58.91 0-106.667-47.756-106.667-106.667s47.756-106.667 106.667-106.667v0h106.667v-469.333c0-0.002 0-0.005 0-0.008 0-9.591 6.329-17.703 15.038-20.389l0.151-0.040 426.667-128c1.839-0.574 3.953-0.904 6.144-0.904 11.782 0 21.333 9.551 21.333 21.333 0 0.003 0 0.006 0 0.008v0 554.667c0 70.692-57.308 128-128 128v0h-21.333c-58.91 0-106.667-47.756-106.667-106.667s47.756-106.667 106.667-106.667v0h106.667z"
    />
  </Svg>
)

export default React.memo(MusicNote)
