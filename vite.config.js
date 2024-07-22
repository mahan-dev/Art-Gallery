import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // base: "/Art-Gallery",
  base: "https://mahan-dev.github.io/Art-Gallery",
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
        
      }
    }}
  // server: {
  //   fs: {
  //     strict: false,
  //   },
  //   hmr: {
  //     overlay: false,
  //   },
  //   index: '/Art-Gallery/index.html', // Replace with your actual GitHub repository name
  // },
})
// npm run dev