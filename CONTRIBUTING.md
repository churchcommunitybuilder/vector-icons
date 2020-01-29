# Creating a new icon
To add a new a icon, do `yarn mk {iconName}`

To override any default props, ensure that you add your props after the `{...props}` on the `Svg` element

[This tool](https://www.smooth-code.com/open-source/svgr/playground/) is helpful to convert svg files to react components

# Running examples

To run them on device, `yarn start`

# PRs and Creating releases

All changes must go through the PR process.

To publish to npm, update version w/semver and `yarn publish`.
