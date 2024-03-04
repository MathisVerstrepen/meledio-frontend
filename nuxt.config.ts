// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "nuxt-svg-icons",
        "@nuxtjs/device",
        "@pinia/nuxt",
    ],
    css: ["~/assets/css/switzer.css", "~/assets/css/global.css"],
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            htmlAttrs: {
                lang: "en",
            },
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    nitro: {
        compressPublicAssets: true,
    },
    image: {
        // https://image.nuxt.com/get-started/configuration
        format: ["webp"],
        providers: {
            myProvider: {
                name: "triton",
                provider: "~/providers/triton.ts", // Path to custom provider
                options: {
                    baseURL: "https://dev.media.meledio.com",
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            api: process.env.API_URL,
            media: process.env.MEDIA_URL,
        },
    },
});
