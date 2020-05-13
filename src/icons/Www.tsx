import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Www: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props} viewBox="0 0 32 32">
    <Path
      fill={fill}
      d="M27.478 10.316c1.757 0 3.188 1.417 3.188 3.158v5.053c0 1.741-1.431 3.158-3.188 3.158h-0.844c-2.123 3.898-6.15 6.316-10.634 6.316s-8.511-2.418-10.634-6.316h-0.844c-1.757 0-3.188-1.417-3.188-3.158v-5.053c0-1.741 1.431-3.158 3.188-3.158h0.844c2.121-3.891 6.137-6.306 10.612-6.313 0.006 0 0.013-0.003 0.019-0.003h0.003c0.001 0 0.001 0 0.001 0 0.009 0 0.018 0.004 0.027 0.004 4.473 0.010 8.486 2.423 10.606 6.312h0.844zM25.16 10.316c-1.263-2.002-3.111-3.495-5.27-4.319 0.942 1.070 1.726 2.539 2.279 4.319h2.991zM11.173 10.316h4.19v-4.967c-1.696 0.376-3.252 2.222-4.19 4.967zM16.638 5.349v4.967h4.192c-0.937-2.746-2.496-4.592-4.192-4.967zM12.115 5.996c-2.162 0.822-4.011 2.317-5.275 4.32h2.995c0.555-1.78 1.337-3.25 2.28-4.32zM6.84 21.684c1.263 2.003 3.112 3.498 5.275 4.321-0.945-1.070-1.727-2.54-2.282-4.321h-2.993zM20.829 21.684h-4.191v4.967c1.696-0.375 3.253-2.222 4.191-4.967zM15.362 26.651v-4.967h-4.191c0.937 2.746 2.495 4.592 4.191 4.967zM19.886 26.005c2.162-0.824 4.011-2.318 5.274-4.321h-2.993c-0.553 1.781-1.337 3.251-2.28 4.321zM18.262 13.351c0.286 0.071 0.46 0.361 0.388 0.646l-1.067 4.267c-0.058 0.23-0.26 0.395-0.497 0.403-0.006 0.001-0.014 0.001-0.020 0.001-0.228 0-0.433-0.146-0.506-0.365l-0.561-1.682-0.561 1.682c-0.075 0.225-0.288 0.382-0.526 0.364-0.237-0.009-0.439-0.174-0.497-0.403l-1.067-4.267c-0.071-0.286 0.102-0.575 0.388-0.646 0.285-0.074 0.575 0.102 0.646 0.388l0.623 2.49 0.487-1.462c0.145-0.435 0.867-0.435 1.011 0l0.487 1.462 0.623-2.49c0.070-0.287 0.361-0.463 0.646-0.388zM10.262 13.351c0.286 0.071 0.46 0.361 0.388 0.646l-1.067 4.267c-0.058 0.23-0.26 0.395-0.497 0.403-0.006 0.001-0.014 0.001-0.020 0.001-0.228 0-0.433-0.146-0.506-0.365l-0.561-1.682-0.561 1.682c-0.074 0.225-0.281 0.382-0.526 0.364-0.237-0.009-0.439-0.174-0.497-0.403l-1.067-4.267c-0.071-0.286 0.102-0.575 0.388-0.646 0.284-0.074 0.575 0.102 0.646 0.388l0.623 2.49 0.487-1.462c0.145-0.435 0.867-0.435 1.011 0l0.487 1.462 0.623-2.49c0.070-0.287 0.358-0.463 0.646-0.388zM26.262 13.351c0.286 0.071 0.46 0.361 0.388 0.646l-1.067 4.267c-0.058 0.23-0.26 0.395-0.497 0.403-0.006 0.001-0.014 0.001-0.020 0.001-0.228 0-0.433-0.146-0.506-0.365l-0.561-1.682-0.561 1.682c-0.074 0.225-0.277 0.382-0.526 0.364-0.237-0.009-0.439-0.174-0.497-0.403l-1.067-4.267c-0.071-0.286 0.102-0.575 0.388-0.646 0.284-0.074 0.575 0.102 0.646 0.388l0.623 2.49 0.487-1.462c0.145-0.435 0.867-0.435 1.011 0l0.487 1.462 0.623-2.49c0.071-0.287 0.358-0.463 0.646-0.388zM29.391 18.526v-5.053c0-1.045-0.858-1.895-1.913-1.895h-22.957c-1.055 0-1.913 0.85-1.913 1.895v5.053c0 1.045 0.858 1.895 1.913 1.895h22.957c1.055 0 1.913-0.85 1.913-1.895z"
    />
  </Svg>
)

export default React.memo(Www)
