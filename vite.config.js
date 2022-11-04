import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
// 路径拼接
const pathResolve = dir => {
    return resolve(__dirname, '.', dir)
}
const alias = {
    '@': pathResolve('src')
}

// https://vitejs.dev/config/
export default ({ command }) => {
    const prodMock = true
    return {
        base: './',
        resolve: {
            alias
        },
        server: {
            port: '8000',
            proxy: {
                '/api': {
                    target: 'http://121.43.163.227:9001', // 凡是遇到 /api 路径的请求，都映射到 target 属性
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '')
                }
            }
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {}
                }
            }
        },
        plugins: [
            vue(),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve',
                prodEnabled: command !== 'serve' && prodMock,
                watchFiles: true,
                injectCode: `
				import { setupProdMockServer } from '../mockProdServer';
				setupProdMockServer();
				`,
                logger: true
            }),
            Components({
                dirs: ['src/components/library']
            })
        ]
    }
}
