import * as React from 'react'
import { Svg, Path, SvgProps } from '../wrappers'

const Checklist: React.FC<SvgProps> = ({ fill, ...props }) => (
  <Svg {...props}>
    <Path
      fill={fill}
      d="M5.00000003,16.5093689 L5.00000003,18.4906311 C5.00000003,18.5000879 4.9999116,18.5 5.00936893,18.5 L6.99063107,18.5 C7.00008788,18.5 6.99999997,18.5000884 6.99999997,18.4906311 L6.99999997,16.5093689 C6.99999997,16.4999121 7.0000884,16.5 6.99063107,16.5 L5.00936893,16.5 C4.99991212,16.5 5.00000003,16.4999116 5.00000003,16.5093689 Z M4,16.5093689 C4,15.9519098 4.44335318,15.5 5.0093689,15.5 L6.9906311,15.5 C7.54809015,15.5 8,15.9433532 8,16.5093689 L8,18.4906311 C8,19.0480902 7.55664682,19.5 6.9906311,19.5 L5.0093689,19.5 C4.45190985,19.5 4,19.0566468 4,18.4906311 L4,16.5093689 Z M4,10.5093689 C4,9.95190985 4.44335318,9.5 5.0093689,9.5 L6.9906311,9.5 C7.54809015,9.5 8,9.94335318 8,10.5093689 L8,12.4906311 C8,13.0480902 7.55664682,13.5 6.9906311,13.5 L5.0093689,13.5 C4.45190985,13.5 4,13.0566468 4,12.4906311 L4,10.5093689 Z M5.00000003,10.5093689 L5.00000003,12.4906311 C5.00000003,12.5000879 4.9999116,12.5 5.00936893,12.5 L6.99063107,12.5 C7.00008788,12.5 6.99999997,12.5000885 6.99999997,12.4906311 L6.99999997,10.5093689 C6.99999997,10.4999121 7.0000884,10.5 6.99063107,10.5 L5.00936893,10.5 C4.99991212,10.5 5.00000003,10.4999116 5.00000003,10.5093689 Z M10.5,12 C10.2238576,12 10,11.7761424 10,11.5 C10,11.2238576 10.2238576,11 10.5,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L10.5,12 Z M10.5,18 C10.2238576,18 10,17.7761424 10,17.5 C10,17.2238576 10.2238576,17 10.5,17 L20.5,17 C20.7761424,17 21,17.2238576 21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L10.5,18 Z M10.5,6 C10.2238576,6 10,5.77614237 10,5.5 C10,5.22385763 10.2238576,5 10.5,5 L20.5,5 C20.7761424,5 21,5.22385763 21,5.5 C21,5.77614237 20.7761424,6 20.5,6 L10.5,6 Z M4.34870511,5.3016981 L5.42140275,6.34556325 L8.19818335,3.64177021 C8.39602836,3.44912555 8.71258278,3.45334126 8.90522743,3.65118627 C9.09787209,3.84903127 9.09365638,4.16558569 8.89581137,4.35823035 L5.42161541,7.74110723 L3.65129547,6.01837082 C3.45339176,5.82578646 3.44907958,5.50923334 3.64166393,5.31132964 C3.83424829,5.11342593 4.1508014,5.10911374 4.34870511,5.3016981 Z"
    />
  </Svg>
)

export default React.memo(Checklist)
