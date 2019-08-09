import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Education: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M7.19999981,11 L16.7999992,11 L20.75,11 L17.75,5 L6.25,5 L5.25,7 L11.4666667,7 C11.7612185,7 12,7.22385763 12,7.5 C12,7.77614237 11.7612185,8 11.4666667,8 L4.75,8 L3.25,11 L7.19999981,11 Z M17.0229275,12 L17.9196042,16.0222662 C18.0399273,16.5620053 17.7573109,17.2326869 17.2756694,17.501439 C17.2756694,17.501439 15.0750645,19.0347982 12.0000491,18.9994004 C8.96099515,19.0347982 6.73209254,17.501439 6.73209254,17.501439 C6.25190153,17.2242535 5.95881016,16.5680775 6.08047787,16.0222662 L6.9770881,12 L2.64748,12 C2.10057471,12 1.84838779,11.603008 2.09447911,11.1132936 L5.44139212,4.45303631 C5.56967665,4.19775391 5.89130875,4 6.1654764,4 L17.8361335,4 C18.1127591,4 18.4344848,4.20283126 18.5602178,4.45303631 L21.9071311,11.1132936 C22.1478315,11.5922804 21.9056355,12 21.3541302,12 L17.0229275,12 Z M3.50375258,14 C3.50375258,13.7238576 3.72761021,13.5 4.00375258,13.5 C4.27989496,13.5 4.50375258,13.7238576 4.50375258,14 L4.50375258,16 C4.78767882,16 5.08666555,16.2157526 5.17131348,16.46875 L5.7006299,18.0507812 C5.87602993,18.5750203 5.57320809,19 5.02575673,19 L2.99571972,19 C2.44759753,19 2.14282256,18.5828629 2.32084656,18.0507812 L2.85016297,16.46875 C2.93580841,16.2127712 3.21546144,16.0047157 3.50375259,16.000079 L3.50375258,14 Z M3.40375268,18 L4.60375249,18 L4.30375277,17.0004883 L3.70375263,17 L3.40375268,18 Z M8,12 L7.10701752,16.1077198 C7.04823208,16.3781328 7.19861209,16.700152 7.44361253,16.8236954 C7.44361253,16.8236954 9.5069768,17.9914282 12.0009299,17.9998604 C14.4948831,18.0082926 16.5566863,16.8261289 16.5566863,16.8261289 C16.8088249,16.701244 16.9520866,16.3795988 16.8929825,16.1077198 L16,12 L8,12 Z" />
  </Svg>
)

export default React.memo(Education)
