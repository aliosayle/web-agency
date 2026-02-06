import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const cleanUrlPaths = ['/services', '/process', '/work', '/about', '/contact']

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'rewrite-clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] || ''
          if (cleanUrlPaths.some((p) => url === p || url === p + '/')) {
            req.url = url.replace(/\/$/, '') + '.html' + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '')
          }
          next()
        })
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        process: resolve(__dirname, 'process.html'),
        work: resolve(__dirname, 'work.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
