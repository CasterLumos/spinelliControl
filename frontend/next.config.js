module.exports = {
    optimizeFonts: true,
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ["localhost"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    env: {
        URL_API: "http://localhost:8000",
        URL_APP: "http://127.0.0.1:3000/",
    },
};
