/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        urlImports: ['https://esm.sh/peerjs@1.5.2?bundle-deps',
            'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
            'https://esm.sh/v135/peerjs@1.5.2/esnext/peerjs.bundle.mjs',
            'https://esm.sh/peerjs@1.4.7?bundle-deps',
            'https://esm.sh/v135/peerjs@1.4.7/esnext/peerjs.bundle.mjs'
        ],
    },
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es'
    }
};

module.exports = nextConfig
