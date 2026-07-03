import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [uni()],
  server: {
    host: "localhost", // 指定服务器应该监听哪个IP地址,默认：localhost
    port: 5173,        // 指定开发服务器端口,默认：5173
    proxy: {           // 为开发服务器配置自定义代理规则
       // 带选项写法：http://localhost:5173/api/posts -> http://jsonplaceholder.typicode.com/posts 
      "/api": {
        target: "https://api.bnzcx.net/api/", // 目标接口
        changeOrigin: true,            // 是否换源
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
	  "/gallerynew": {
	    target: "https://a6tkapi1.com/gallerynew/", // 目标接口
	    changeOrigin: true,            // 是否换源
	    rewrite: (path) => path.replace(/^\/gallerynew/, ""),
	  },
	  "/cms": {
	    target: "http://127.0.0.1:8787/cms/", // 目标接口
	    changeOrigin: true,            // 是否换源
	    rewrite: (path) => path.replace(/^\/cms/, ""),
	  },
	  "/liuhe": {
	    target: "http://127.0.0.1:8787/liuhe/", // 目标接口
	    changeOrigin: true,            // 是否换源
	    rewrite: (path) => path.replace(/^\/liuhe/, ""),
	  },
    }
  }
});