import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/npi-proxy': {
        target: 'https://npiregistry.cms.hhs.gov',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/npi-proxy/, '/api'),
      },
    },
  },
})
