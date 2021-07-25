import baseConfig from './rollup.config.js'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      host: 'localhost',
      port: 8080,
      contentBase: ['dist', 'examples'],
      openPage: '/examples/index.html',
    }),
    livereload()
  ]
}