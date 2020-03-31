import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const StopWatch: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 1024 1024">
    <Path d="M874.581 427.861c-14.223 2.437-26.818 8.075-37.459 16.154l0.211-0.154c-47.566-136.478-175.147-232.655-325.192-232.655-189.762 0-343.595 153.833-343.595 343.595 0 159.39 108.531 293.432 255.724 332.256l2.395 0.537v41.557c-172.292-40.331-298.638-192.658-298.638-374.494 0-93.21 33.199-178.666 88.418-245.188l-0.51 0.632-39.040-38.997c-3.865-3.865-6.256-9.206-6.256-15.104 0-11.797 9.563-21.36 21.36-21.36 5.898 0 11.239 2.391 15.104 6.256v0l37.803 37.845c68.828-66.855 162.872-108.075 266.542-108.075 0.194 0 0.387 0 0.581 0h-0.030c0.164 0 0.357 0 0.551 0 103.671 0 197.714 41.22 266.635 108.164l-0.092-0.089 37.803-37.845c3.865-3.865 9.206-6.256 15.104-6.256 11.797 0 21.36 9.563 21.36 21.36 0 5.898-2.391 11.239-6.256 15.104v0l-39.040 38.997c27.858 33.457 50.424 72.53 65.68 115.084l0.837 2.676zM405.333 85.333h213.333c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333v0h-213.333c-11.782 0-21.333-9.551-21.333-21.333s9.551-21.333 21.333-21.333v0zM490.667 554.667v-213.333c0-11.782 9.551-21.333 21.333-21.333s21.333 9.551 21.333 21.333v0 234.667c0 11.782-9.551 21.333-21.333 21.333v0h-256c-11.782 0-21.333-9.551-21.333-21.333s9.551-21.333 21.333-21.333v0h234.667zM469.333 873.301l318.635-318.635 108.032 108.032-318.635 318.635h-108.032v-108.032zM972.8 586.837l-53.12 53.163-109.013-108.971 53.163-53.205c5.237-5.25 12.479-8.498 20.48-8.498s15.243 3.248 20.479 8.497l68.054 68.012c5.25 5.237 8.498 12.479 8.498 20.48s-3.248 15.243-8.497 20.479l-0.001 0.001z" />
  </Svg>
)

export default React.memo(StopWatch)
