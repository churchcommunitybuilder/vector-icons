if (process.env.NODE_ENV === 'production') {
  require('./dist/index')
} else {
  require('./node_modules/expo/AppEntry')
}
