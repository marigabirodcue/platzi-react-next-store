/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig */

/* module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev',
        permanent: true,
      }
    ]
  }
} */


const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    }
  },
  assetPrefix: !debug ? 'https://marigabirodcue.github.io/platzi-react-next-store/' : '',
  reactStrictMode: true,
  basePath: '/platzi-react-next-store',
  images: {
    domains: ['placeimg.com','api.lorem.space','vuzoon.com','www.complementosdelcafe.com','i.imgur.com'],
  },
};
