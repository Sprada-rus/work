import {defineConfig} from 'vite';

export default defineConfig({
    base: '/work/',
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler"
            }
        }
    }
})