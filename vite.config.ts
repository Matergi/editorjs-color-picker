import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import pkg from './package.json';

export default defineConfig({
	plugins: [cssInjectedByJsPlugin(), dts()],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'ColorPicker', // disponibile come window.ColorPicker
			fileName: '[name]',
			formats: ['es', 'cjs', 'umd'], // includi UMD
		},
		rollupOptions: {
			external: Object.keys(pkg.dependencies).filter(
				(dep) => !['@codexteam/icons'].includes(dep)
			),
		},
	},
});
