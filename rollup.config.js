import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import VuePlugin from 'rollup-plugin-vue'
import clear from 'rollup-plugin-clear'
import postcss from 'rollup-plugin-postcss'
import { name, version, author } from './package.json'

const banner =
'/*!\n' +
` * ${name} v${version}\n` +
` * (c) 2014-${new Date().getFullYear()} ${author}\n` +
' * Released under the MIT License.\n' +
' */'

const pkgName = 'Vue3SplitPane'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `dist/${pkgName}.umd.js`,
      format: 'umd',
      name: pkgName,
      globals: {
        vue: 'Vue'
      },
      banner
    },
    {
      file: `dist/${pkgName}.umd.min.js`,
      format: 'umd',
      name: pkgName,
      banner,
      globals: {
        vue: 'Vue'
      },
      plugins: [terser()]
    },
    {
      file: `dist/${pkgName}.cjs.js`,
      format: 'cjs',
      name: name,
      banner
    },
    {
      file: `dist/${pkgName}.esm.js`,
      format: 'es',
      banner
    }
  ],
  plugins: [
    clear({
      targets: ['dist']
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    VuePlugin({ 
      css: true 
    }),
    postcss(),
    // eslint({
    //   throwOnError: false, // 抛出异常并阻止打包
    //   include: ['src/**'],
    //   exclude: ['node_modules/**']
    // }),
    babel({ 
      babelHelpers: 'bundled' 
    })
  ]
}