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

module.exports = {
  reactStrictMode: true,
  basePath: '/platzi-react-next-store',
  images: {
    domains: ['placeimg.com','api.lorem.space','vuzoon.com','www.complementosdelcafe.com','i.imgur.com'],
  },
};
