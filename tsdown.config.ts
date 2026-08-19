import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: './src/**/*.ts',
  target: 'node22',
  clean: true,
  deps: {
    neverBundle: true,
  },
  shims: true,
  dts: true,
  publint: true,
  fixedExtension: false,
  outputOptions: {
    exports: 'named',
  },
});
