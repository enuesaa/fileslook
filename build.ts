import esbuild from 'esbuild'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

await esbuild.build({
  bundle: true,
  entryPoints: [
    './src/index.ts',
  ],
  external: ['react'],
  plugins: [vanillaExtractPlugin()],
  outdir: './dist',
  format: 'esm',
})
