import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const ProcessQueues: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M13.1710374,18.5828592 C13.6775181,20.1457275 15.2350713,21.1815981 16.9265427,20.9739115 C18.0970701,20.8301888 19.0965191,20.1159303 19.6215254,19.083965 C19.7467388,18.8378427 20.0477659,18.7398265 20.2938883,18.8650399 C20.5400106,18.9902532 20.6380268,19.2912803 20.5128134,19.5374027 C19.8385228,20.8628047 18.5526437,21.7817613 17.048412,21.9664577 C14.9683285,22.2218598 13.045762,21.0145679 12.3125274,19.150724 L12.0569062,19.7258717 C11.9447541,19.9782138 11.6492732,20.0918603 11.3969311,19.9797083 C11.1445891,19.8675562 11.0309426,19.5720754 11.1430946,19.3197333 L11.9518223,17.500096 L12.0746902,17.3311186 C12.0959153,17.3123112 12.0959153,17.3123112 12.1410893,17.280594 C12.1839544,17.2539201 12.1839544,17.2539201 12.271654,17.2208208 C12.3961952,17.1893775 12.3961952,17.1893775 12.6193588,17.2433512 L14.4389961,18.0520788 C14.6913382,18.1642309 14.8049847,18.4597118 14.6928326,18.7120539 C14.5806806,18.9643959 14.2851997,19.0780424 14.0328576,18.9658904 L13.1710374,18.5828592 Z M19.8315381,16.4251208 C19.3277804,14.8578002 17.767806,13.8180486 16.0734573,14.0260885 C14.9029299,14.1698112 13.9034809,14.8840697 13.3784746,15.916035 C13.2532612,16.1621573 12.9522341,16.2601735 12.7061117,16.1349601 C12.4599894,16.0097468 12.3619732,15.7087197 12.4871866,15.4625973 C13.1614772,14.1371953 14.4473563,13.2182387 15.951588,13.0335423 C18.05224,12.7756147 19.9922445,14.0094513 20.7088742,15.9047588 L20.97902,15.2969308 C21.091172,15.0445887 21.3866529,14.9309422 21.638995,15.0430942 C21.8913371,15.1552463 22.0049835,15.4507271 21.8928315,15.7030692 L21.0841038,17.5227065 L20.9612359,17.6916839 C20.9400108,17.7104913 20.9400108,17.7104913 20.8948368,17.7422085 C20.8519717,17.7688824 20.8519717,17.7688824 20.7642721,17.8019817 C20.6397309,17.833425 20.6397309,17.833425 20.4165673,17.7794513 L18.59693,16.9707237 C18.3445879,16.8585716 18.2309414,16.5630907 18.3430935,16.3107486 C18.4552455,16.0584066 18.7507264,15.9447601 19.0030685,16.0569121 L19.8315381,16.4251208 Z M13.6264045,12.6069494 C13.2734329,12.8059216 12.8789479,13.085316 12.4853305,13.4763858 C12.484306,13.0298115 12.4815848,11.84375 12.4815848,11.84375 C13.971429,10.3249996 13.971429,9.08453369 13.971429,9.08453369 C13.971429,9.08453369 14.4285714,8.74828339 14.4285714,8.1875 C14.4285714,7.62671661 13.971429,7.28749979 13.971429,7.28749979 C13.971429,7.28749979 15,3.125 11,3.125 C7,3.125 8.02880859,7.28749979 8.02880859,7.28749979 C8.02880859,7.28749979 7.5739235,7.625 7.57407924,8.1875 C7.57423498,8.75 8.02943638,9.08750021 8.02943638,9.08750021 C8.02943638,9.08750021 8.02857154,10.3249996 9.51681083,11.84375 C9.52239419,11.8494478 9.5142855,13.6437504 9.5142855,13.6437504 L4.6008221,15.9591875 C4.34789504,16.0783777 4.14484137,16.4054292 4.14692687,16.6707131 C4.14692687,16.6707131 4.16782924,18.8776779 4.14285714,18.8776779 C4.1540346,18.8776779 6.90277665,18.8771414 9.93618881,18.8765487 L9.43180514,20 L4.00087166,20 C3.4481055,20 3,19.5520711 3,19.0013041 L3,16.4986959 C3,15.9471314 3.40373014,15.3055169 3.89905634,15.0669106 L8.37142835,12.9124998 L8.3757062,12.2375004 C7.91428593,11.6750004 7.59670802,11.2350068 7.59670802,11.2350068 C7.3016515,10.8406605 7.03837505,10.1541019 6.96641274,9.61940694 C6.64341958,9.32123515 6.42857143,8.79141488 6.42857143,8.1875 C6.42857143,7.6795473 6.58056552,7.22401276 6.82106158,6.91464646 L6.77142879,5.9375 C6.88571439,3.46250021 8.37162923,2 11.0002548,2 C13.667102,2 15.1142862,3.46250021 15.2285712,5.9375 L15.1789384,6.91464646 C15.4194345,7.22401276 15.5714286,7.6795473 15.5714286,8.1875 C15.5714286,8.791422 15.3565754,9.32124764 15.0335758,9.61941748 C14.9614223,10.155218 14.6971061,10.8441177 14.4032086,11.2350068 C14.4032086,11.2350068 14.0857141,11.6750004 13.6237842,12.2375004 L13.6264045,12.6069494 Z" />
  </Svg>
)

export default React.memo(ProcessQueues)

