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

    plugins: [
        // { src: '@/plugins/api', mode: 'client' },
        '@/plugins/ant-design',
        // '@/plugins/filters',
        // '@/plugins/global-components',
        // '@/plugins/helpers',
        // { src: '@/plugins/agora-rtc.js', mode: 'client' },
        // { src: '@/plugins/white-web-sdk.js', mode: 'client' },
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

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/i18n',
    ],
    axios: {
        baseURL: process.env.API_HOST,
    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'data.accessToken',
                    global: true,
                    required: true,
                    maxAge: 60 * 60 * 24 * 30, // 1 month
                },
                autoLogout: false,
                user: {
                    property: 'data.user',
                    autoFetch: true,
                },
                endpoints: {
                    login: {
                        url: `${process.env.ACCOUNT_API_HOST}/sessions/login`,
                        method: 'POST',
                    },
                    logout: false,
                    user: {
                        url: `${process.env.ACCOUNT_API_HOST}/sessions/current`,
                        method: 'GET',
                    },
                },
            },
        },
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            home: false,
        },
        // plugins: [
        //     { src: '@/plugins/permissions', ssr: false },
        // ],
    },

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

    // publicRuntimeConfig: {
    //     googleAnalytics: {
    //         id: process.env.GOOGLE_ANALYTICS_ID,
    //     },
    // },

    // env: {
    //     ACADEMIC_API_HOST: process.env.ACADEMIC_API_HOST,
    //     ACCOUNT_API_HOST: process.env.ACCOUNT_API_HOST,
    //     ELEARNING_API_HOST: process.env.ELEARNING_API_HOST,
    //     NOTIFICATION_API_HOST: process.env.NOTIFICATION_API_HOST,
    //     RSA_PUBLIC_KEY: process.env.RSA_PUBLIC_KEY,
    //     IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    //     IMAGE_USER_URL: process.env.IMAGE_USER_URL,
    //     TINYMCE_KEY: process.env.TINYMCE_KEY,
    //     LIVE_CLASS_HOST: process.env.LIVE_CLASS_HOST || '',
    //     LIVE_CLASS_API_HOST: process.env.LIVE_CLASS_API_HOST,
    //     LIVE_CLASS_SOCKET_HOST: process.env.LIVE_CLASS_SOCKET_HOST,
    //     LIVE_CLASS_SOCKET_PATH: process.env.LIVE_CLASS_SOCKET_PATH,
    //     PDF_KEY: process.env.PDF_KEY,
    //     AGORA_APP_ID: process.env.AGORA_APP_ID,
    //     AGORA_APP_IDENTIFIER: process.env.AGORA_APP_IDENTIFIER,
    // },
};
