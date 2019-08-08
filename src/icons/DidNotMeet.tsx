import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DidNotMeet: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path d="M17.5251263,4 L16.5,5.02512627 L16.5,3.5 C16.5,3.22385763 16.2761424,3 16,3 C15.7238576,3 15.5,3.22385763 15.5,3.5 L15.5,5.5 C15.5,5.6444625 15.5612655,5.77461568 15.6592316,5.86589463 L14.9525,6.57262624 C14.6733301,6.29983607 14.5,5.91938898 14.5,5.49983513 L14.5,5 L9.5,5 L9.5,5.49983513 C9.5,6.32835331 8.83420277,7 8,7 C7.17157288,7 6.5,6.32567775 6.5,5.49983513 L6.5,5 L5.50524116,5 C4.66712976,5 4,5.67157288 4,6.5 L4,8 L13.5251263,8 L12.5251263,9 L4,9 L4,17.5251263 L3.03877809,18.4863482 C3.01326317,18.3281364 3,18.1656494 3,17.9998738 L3,7.00012623 C3,5.34320226 4.35292554,4 5.99253976,4 L6.5,4 L6.5,3.50016487 C6.5,2.67164669 7.16579723,2 8,2 C8.82842712,2 9.5,2.67432225 9.5,3.50016487 L9.5,4 L14.5,4 L14.5,3.50016487 C14.5,2.67164669 15.1657972,2 16,2 C16.8284271,2 17.5,2.67432225 17.5,3.50016487 L17.5,4 L17.5251263,4 Z M20.7286963,5.7461774 C20.9028857,6.12704829 21,6.55154757 21,7.00012623 L21,17.9998738 C21,19.6567977 19.6470745,21 18.0074602,21 L5.99253976,21 C5.82929412,21 5.66910144,20.9869857 5.51295127,20.9619225 L6.47487373,20 L18.0059397,20 C19.1054862,20 20,19.1081436 20,18.007983 L20,9 L17.4748737,9 L18.4748737,8 L20,8 L20,6.5 C20,6.49167459 19.9999329,6.48336596 19.9997991,6.47507459 L20.7286963,5.7461774 Z M7.5,3.5 L7.5,5.5 C7.5,5.77614237 7.72385763,6 8,6 C8.27614237,6 8.5,5.77614237 8.5,5.5 L8.5,3.5 C8.5,3.22385763 8.27614237,3 8,3 C7.72385763,3 7.5,3.22385763 7.5,3.5 Z M3.35355339,21.3535534 C3.15829124,21.5488155 2.84170876,21.5488155 2.64644661,21.3535534 C2.45118446,21.1582912 2.45118446,20.8417088 2.64644661,20.6464466 L20.6464466,2.64644661 C20.8417088,2.45118446 21.1582912,2.45118446 21.3535534,2.64644661 C21.5488155,2.84170876 21.5488155,3.15829124 21.3535534,3.35355339 L3.35355339,21.3535534 Z" />
  </Svg>
)

export default React.memo(DidNotMeet)

