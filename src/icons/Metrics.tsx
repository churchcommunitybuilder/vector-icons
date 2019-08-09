import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Metrics: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M5.2133101,11.4076245 L8.18805248,8.85112703 C8.06740936,8.59345405 8,8.30517891 8,8 C8,6.8954305 8.88772964,6 10,6 C11.1045695,6 12,6.88772964 12,8 C12,8.62330112 11.717323,9.18000677 11.2711349,9.54679986 L13.5101863,14.0597813 C13.6667007,14.0207331 13.8307508,14 14,14 C14.3771237,14 14.7298683,14.1034814 15.0309202,14.2840499 L18.2649318,10.9988572 C18.0963902,10.7056911 18,10.3649311 18,10 C18,8.8954305 18.8877296,8 20,8 C21.1045695,8 22,8.88772964 22,10 C22,11.1045695 21.1122704,12 20,12 C19.621084,12 19.2667792,11.8955326 18.9647909,11.7133703 L15.7325459,14.9967684 C15.9026478,15.2909171 16,15.6332524 16,16 C16,17.1045695 15.1122704,18 14,18 C12.8954305,18 12,17.1122704 12,16 C12,15.4233483 12.2419479,14.9036967 12.6314812,14.5386949 L10.3635079,9.96741899 C10.2457588,9.98882053 10.1242811,10 10,10 C9.56132429,10 9.15563506,9.85998266 8.82592162,9.62149014 L5.83243532,12.1940962 C5.94019664,12.4401032 6,12.7125534 6,13 C6,14.1045695 5.11227036,15 4,15 C2.8954305,15 2,14.1122704 2,13 C2,11.8954305 2.88772964,11 4,11 C4.4562379,11 4.87679524,11.1514528 5.2133101,11.4076245 Z" />
  </Svg>
)

export default React.memo(Metrics)
