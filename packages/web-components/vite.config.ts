import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import utwm from 'unplugin-tailwindcss-mangle/vite'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const builtClassesPrefix = 'nf-wc-'

export default defineConfig({
  plugins: [
    react(),

    // Modify TailwindCSS classes by adding a prefix to prevent
    // classnames clash issues in case of who is using the web components
    // is also using similar classess
    utwm({
      classGenerator: {
        classPrefix: builtClassesPrefix,
        customGenerate: (original, options) => {
          return options.classPrefix + original
        },
      },
    }),

    // Inject CSS into same final JS file
    // so final user doesn't need to add
    // two different files
    cssInjectedByJsPlugin(),

    // Add banner at the top of the built file
    // to easily recognize the version of it
    banner(`NoFrixion Web Components - Version ${process.env.npm_package_version}`),
  ],
  build: {
    minify: 'terser',
    lib: {
      formats: ['umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'web-components',
      fileName: () => `web-components.js`,
    },
  },
  define: {
    // Need to declare environment variables as React uses them internally
    'process.env': process.env,
    __TW_CLASSES_PREFIX__: JSON.stringify('nf-wc-'),
  },
})
