const { uglify } = require('rollup-plugin-uglify')
const typescript = require('rollup-plugin-typescript2')
const postcss = require('rollup-plugin-postcss')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const resolve = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')

module.exports = {
  input: './index.ts',
  output: [
    {
      file: './index.js',
      format: 'es'
    }
  ],
  external: ['styled-components', 'react'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extensions: ['.css']
    }),
    uglify(),
    babel()
  ]
}
