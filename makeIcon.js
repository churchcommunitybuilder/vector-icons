const fs = require('fs')

const app = require('commander')

app
  .arguments('<iconName>')
  .description('Create icon')
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  app.help()
  process.exit(1)
}

const {
  args: [iconName],
} = app

const iconFilePath = `src/icons/${iconName}.tsx`

try {
  const currentIconFile = fs.readFileSync(iconFilePath)

  if (currentIconFile) {
    console.error(`${iconName} icon already exists`)
    process.exit(1)
  }
} catch (e) { }

const iconFile = `
import * as React from 'react'
import Svg, { SvgProps } from 'react-native-svg'

const ${iconName}: React.FC<SvgProps> = props => (
  <Svg {...props}>
  </Svg>
)

export default React.memo(${iconName})

`

fs.writeFileSync(`src/icons/${iconName}.tsx`, iconFile.trimLeft())

const currentIndexLines = [
  ...fs.readFileSync('src/icons/index.ts').toString().split('\n'),
  `export { default as ${iconName} } from './${iconName}'`
].filter(x => !!x)

currentIndexLines.sort()

const newIndexFile = [...currentIndexLines, ''].join('\n')

fs.writeFileSync(`src/icons/index.ts`, newIndexFile)
