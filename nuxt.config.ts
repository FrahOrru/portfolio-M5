// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    css: [
        '@/assets/css/main.css',
    ],
    modules: [
        'vite-plugin-vue-type-imports/nuxt',
        '@pinia/nuxt',
    ]
})
