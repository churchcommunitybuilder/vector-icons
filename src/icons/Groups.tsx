import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Groups: React.FC<SvgProps> = props => (
  <Svg {...props}>
    <Path
      d="M9.312 6.035A6.979 6.979 0 0 1 12 5.5c.953 0 1.86.19 2.688.535a5.5 5.5 0 1 1 3.64 9.462 7 7 0 0 1-12.656 0 5.5 5.5 0 1 1 3.64-9.462zM18.5 7.5c-.5 0-.916.335-1.1.5-.037.075 2.4 2.6 1.3 6.5.605 0 1.422-.146 2.207-.685a7.86 7.86 0 0 0-.58-.072c-.649-.124-.866-.294-1.077-.743-.097-.73.248-1 .35-1 .4.004.733-.161 1.126-.271a7.976 7.976 0 0 1-.472-2.279C20.26 8.93 19.5 7.5 18.5 7.5zm1.39 5.263c.159.037 1.376.378 1.91.237.9-.8 1.2-2 1.21-2.98.023-2.52-2.11-4.52-4.51-4.52-1.002 0-2 .3-2.8 1 .3.25.7.5 1 .8.45-.45 1.55-.65 1.8-.65 1 0 1.576.528 1.797.788.521.516.813 1.231.806 1.977.003.728.163 1.447.467 2.104a.422.422 0 0 1 .187.349.458.458 0 0 1-.21.38 2.768 2.768 0 0 1-1.656.515zm-5.075.95C14.6 14.3 14.4 14.8 14 15.25v.25s.5.5 2.2 1.3c.3-.3 2.05-2.1 1.8-4.8-.25-2.7-3-5.5-6-5.5S6.25 9.3 6 12s1.5 4.5 1.8 4.8c1.7-.8 2.2-1.3 2.2-1.3v-.25c-.4-.45-.6-.95-.75-1.454C9 13.5 8.8 13 8.8 12.75S9 12 9 12v-1s0-2.823 3-2.823S15 11 15 11v1s.2.5.2.75c0 .228-.2.75-.385.963zM11 15v1c-.2.2-.5.5-2.5 1.4 1.25.85 2.5 1.1 3.5 1.1s2.25-.25 3.5-1.1c-2-.9-2.3-1.2-2.5-1.4v-1s.2-.2.2-.25c.4-.35.55-.85.7-1.35.03-.1.2-.25.2-.25s.15-.15.15-.55c0-.2-.25-.45-.25-.45V11s0-1.82-2-1.82S10 11 10 11v1.15s-.25.25-.25.45c0 .5.15.55.15.55s.17.15.2.25c.15.502.3 1 .7 1.35 0 .05.2.25.2.25zm-6.257-2.648a.504.504 0 0 1-.013.161c-.103.327-.398.594-1.73 1.187.647.42 1.258.717 1.984.78.097.009.195.013.316.02-.675-2.857-.098-4.72 1.3-6.5.06-.077-.6-.5-1.1-.5-1 0-1.519.464-1.519 1.264l.017.883a.522.522 0 0 1-.083.356.32.32 0 0 0-.021.16.327.327 0 0 0 .108.25.556.556 0 0 1 .18.339c.062.332.216.64.443.89A.523.523 0 0 1 4.75 12l-.008.313.001.039zM5.5 6.65c.683-.061 1.35.2 1.8.65.3-.305.7-.55 1-.8-.8-.7-1.665-1-2.8-.997A4.498 4.498 0 0 0 1 10c0 1 .3 2.2 1.2 3 .55-.2 1.223-.57 1.712-.938v-.157c-.25-.27-.42-.6-.492-.955l-.036-.117a1.137 1.137 0 0 1-.35-.81.839.839 0 0 1 .172-.539v-.799c0-1.256.884-2.036 2.294-2.035z" />
  </Svg>
)

export default React.memo(Groups)

