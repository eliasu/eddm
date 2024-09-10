import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `$injectedColor: orange;`
          }
        }
    },
    plugins: [
        laravel({
            refresh: true,
            input: [
                'resources/css/site.css',
                'resources/js/site.js',
                'resources/scss/main.scss',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            
        }),
        // 
        // vue2(),
    ],

    server: {
        open: "http://eddm.test",
    },
});
