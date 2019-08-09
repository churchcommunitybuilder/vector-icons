import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Youtube: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path d="M23.637 15.141h-14.942c-2.375 0-4.3 1.927-4.3 4.302v3.456c0 2.375 1.925 4.301 4.3 4.301h14.942c2.375 0 4.3-1.927 4.3-4.301v-3.456c0-2.375-1.926-4.302-4.3-4.302v0zM11.835 17.832h-1.389v6.902h-1.342v-6.902h-1.388v-1.174h4.119v1.174zM15.759 24.734h-1.19v-0.653c-0.221 0.241-0.449 0.426-0.687 0.55-0.238 0.13-0.468 0.19-0.692 0.19-0.276 0-0.482-0.088-0.623-0.266-0.138-0.178-0.209-0.442-0.209-0.799v-4.981h1.19v4.571c0 0.141 0.026 0.242 0.074 0.305 0.051 0.065 0.133 0.095 0.245 0.095 0.086 0 0.198-0.041 0.332-0.125s0.258-0.19 0.37-0.321v-4.526h1.19v5.959zM20.080 23.504c0 0.421-0.094 0.744-0.28 0.97s-0.457 0.336-0.809 0.336c-0.234 0-0.443-0.042-0.624-0.13s-0.353-0.219-0.509-0.404v0.456h-1.205v-8.076h1.205v2.601c0.161-0.18 0.332-0.32 0.51-0.413 0.182-0.096 0.365-0.142 0.55-0.142 0.377 0 0.664 0.126 0.863 0.38s0.299 0.626 0.299 1.114v3.307h0.001zM24.21 21.898h-2.278v1.123c0 0.313 0.038 0.531 0.116 0.652 0.080 0.122 0.214 0.181 0.404 0.181 0.198 0 0.335-0.051 0.414-0.154 0.077-0.104 0.118-0.329 0.118-0.68v-0.271h1.225v0.306c0 0.611-0.148 1.071-0.449 1.381-0.296 0.308-0.743 0.46-1.336 0.46-0.534 0-0.955-0.163-1.261-0.49-0.305-0.325-0.46-0.777-0.46-1.351v-2.676c0-0.515 0.17-0.939 0.507-1.264s0.77-0.487 1.303-0.487c0.546 0 0.965 0.15 1.257 0.452s0.439 0.734 0.439 1.299v1.519z" />
    <Path d="M22.464 19.67c-0.19 0-0.325 0.053-0.408 0.165-0.084 0.105-0.124 0.284-0.124 0.534v0.602h1.053v-0.602c0-0.25-0.042-0.43-0.126-0.534-0.080-0.111-0.214-0.165-0.395-0.165v0zM18.356 19.65c-0.084 0-0.17 0.019-0.252 0.058-0.084 0.038-0.165 0.101-0.246 0.182v3.712c0.096 0.096 0.19 0.17 0.282 0.212 0.092 0.041 0.187 0.064 0.288 0.064 0.146 0 0.253-0.042 0.322-0.128s0.102-0.219 0.102-0.41v-3.077c0-0.203-0.040-0.354-0.125-0.458-0.087-0.103-0.211-0.155-0.372-0.155v0z" />
    <Path d="M10.652 13.071h1.509v-3.691l1.757-5.207h-1.535l-0.933 3.556h-0.096l-0.98-3.556h-1.52l1.797 5.372z" />
    <Path d="M15.963 13.237c0.61 0 1.088-0.16 1.436-0.48 0.346-0.321 0.519-0.759 0.519-1.321v-3.391c0-0.5-0.177-0.911-0.53-1.228-0.355-0.316-0.81-0.476-1.365-0.476-0.61 0-1.095 0.151-1.456 0.452s-0.541 0.705-0.541 1.215v3.402c0 0.558 0.176 1 0.528 1.331 0.352 0.33 0.822 0.495 1.408 0.495v0zM15.407 7.958c0-0.143 0.051-0.258 0.152-0.348 0.104-0.088 0.236-0.131 0.4-0.131 0.177 0 0.321 0.043 0.43 0.131 0.109 0.090 0.163 0.205 0.163 0.348v3.576c0 0.175-0.053 0.314-0.161 0.415s-0.251 0.15-0.432 0.15c-0.177 0-0.314-0.048-0.41-0.149-0.095-0.098-0.143-0.237-0.143-0.417v-3.576h0zM19.943 13.167c0.252 0 0.511-0.072 0.777-0.21 0.269-0.14 0.527-0.345 0.772-0.612v0.727h1.341v-6.564h-1.341v4.982c-0.125 0.143-0.264 0.26-0.412 0.353-0.152 0.092-0.276 0.138-0.375 0.138-0.126 0-0.218-0.035-0.273-0.106-0.055-0.069-0.086-0.181-0.086-0.335v-5.032h-1.339v5.486c0 0.391 0.079 0.684 0.234 0.877 0.158 0.197 0.39 0.296 0.701 0.296v0z" />
  </Svg>
)

export default React.memo(Youtube)
