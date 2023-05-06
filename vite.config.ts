import path from 'path';
import vue from '@vitejs/plugin-vue';
// import babel from '@vitejs/plugin-babel';
export default async ({ command, mode }) => {
  const buildDir = mode ? 'dist' : 'build';
  let config = {
    base: '/',
    build: {
      outDir: buildDir,
      assetsDir: '',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      manifest: false,
      minify: 'terser',
      rollupOptions: {
        input: 'index.html',
        output: {
          format: 'es'
        }
      }
    },
    server: {
      host: 'localhost',
      port: 8081,
      open: true,
      hmr: {
        host: 'localhost',
        protocol: 'ws'
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [vue()]
  };
  return config;
};
