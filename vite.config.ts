import path from 'path';
import vue from '@vitejs/plugin-vue';
// import babel from '@vitejs/plugin-babel';
export default async ({ command, mode }) => {
  let config = {
    base: '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
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
