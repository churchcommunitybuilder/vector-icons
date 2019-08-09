import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Linkedin: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M26.224 4h-20.453c-0.979 0-1.773 0.77-1.773 1.719v20.562c0 0.949 0.794 1.719 1.773 1.719h20.453c0.98 0 1.774-0.771 1.774-1.719v-20.562c0-0.95-0.794-1.719-1.774-1.719v0zM11.273 24.091h-3.625v-10.837h3.625v10.837zM9.461 11.774h-0.024c-1.216 0-2.003-0.832-2.003-1.872 0-1.063 0.811-1.872 2.051-1.872s2.003 0.809 2.027 1.872c0 1.040-0.788 1.872-2.051 1.872v0zM24.344 24.091h-3.625v-5.799c0-1.456-0.524-2.45-1.836-2.45-1.001 0-1.598 0.67-1.86 1.318-0.096 0.231-0.119 0.554-0.119 0.879v6.052h-3.625c0 0 0.048-9.821 0-10.837h3.625v1.534c0.482-0.738 1.343-1.79 3.268-1.79 2.385 0 4.173 1.549 4.173 4.878v6.215h-0z" />
  </Svg>
)

export default React.memo(Linkedin)
