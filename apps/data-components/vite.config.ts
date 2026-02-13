import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import utwm from 'unplugin-tailwindcss-mangle/vite'

const builtClassesPrefix = 'nf-wc-'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'data-components',
    },
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          axios: 'axios',
          '@tanstack/react-query': '@tanstack/react-query',
        },
      },
    },
  },  
  resolve: {
    alias: {
      // 👇 Define your aliases here
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
