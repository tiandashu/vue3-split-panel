import baseConfig from './rollup.config.js'
import filesize from 'rollup-plugin-filesize'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    filesize()
  ]
}