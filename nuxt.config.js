require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

export default {
    dev: !isProduction,

    ssr: false,

    // When SPA
    loading: '@/components/shared/Loading.vue',

    // When SSR
    loadingIndicator: {
        name: 'wandering-cubes',
        color: '#6271EB',
    },

    head: {
        title: 'Meskola',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    googleFonts: {
        families: {
            'Be+Vietnam+Pro': [300, 400, 500, 600],
        },
    },

    css: [
        '@/assets/main.scss',
        '@/assets/ant/main.less',
        '@fortawesome/fontawesome-free/css/all.css',
    ],

    robots: [
        {
            UserAgent: '*',
            Disallow: process.env.APP_ENV === 'production'
                ? [
                    '/*.json',
                    '/*.xml',
                ]
                : '/',
        },
    ],

    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || '3000',
    },

    render: {
        http2: {
            push: true,
        },
    },

    buildModules: [
        '@nuxt/postcss8',
        '@nuxtjs/eslint-module',
        '@nuxtjs/fontawesome',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/google-analytics',
    ],

    build: {
        postcss: {
            plugins: {
                tailwindcss: 'tailwind.config.js',
                autoprefixer: {},
                ...(process.env.APP_ENV === 'production' ? { cssnano: {} } : {}),
            },
        },
        loaders: {
            less: {
                javascriptEnabled: true,
            },
        },
        babel: {
            plugins: [
                [
                    'import',
                    {
                        libraryName: 'ant-design-vue',
                        libraryDirectory: 'es',
                        style: true,
                    },
                    'ant-design-vue',
                ],
            ],
        },
    },
};
