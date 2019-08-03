# Creating a new icon
To add a new a icon, add the component to `src/icons` and export it from `src/icons/index.ts`

To override any default props, ensure that you add your props after the `{...props}` on the `Svg` element

# Running examples

To run them on device, `yarn examples`
To run them on web, `yarn examples:web`
To publish examples app to expo, `yarn examples:publish`

# PRs and Creating releases

All changes must be PRs
To publish to npm, update version w/semver and `yarn publish`
