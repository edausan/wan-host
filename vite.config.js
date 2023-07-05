import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    target: 'esnext'
  },
  plugins: [react(),
    federation({
      name: 'app',
      remotes: {
        remoteApp:'http://localhost:5002/assets/remoteEntry.js',
      },
      filename: 'remoteEntry.js',
      exposes: {
        "./TextField": "./src/components/TextField"
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    })],
})
