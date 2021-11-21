import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import commonjs from "rollup-plugin-commonjs";
// @ts-ignore
import externalGlobals from "rollup-plugin-external-globals";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),viteCompression()],
  css: {
    preprocessorOptions:{
      less:{
        javascriptEnabled:true,
        // modifyVars: { "@primary-color": "#531dab", }
        // color: #531dab;
        // background: #f9f0ff;
        // border-color: #d3adf7;
      }
    }
  },
  resolve: {
    alias: [
      // fix less import by: @import ~
      // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
      { find: /^~/, replacement: '' },
    ],
  },
  build: {
    rollupOptions: {
      external: ["moment"],
      plugins: [
        commonjs(),
        externalGlobals({
          moment: "moment"
        }),
      ],
    },
  },
})
