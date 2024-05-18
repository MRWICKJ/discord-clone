/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // This is a 301 redirect
      },
    ];
  },
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });
    

    return config;
  },
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io"
    ]
  }
}
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/home',
//         permanent: true, // This is a 301 redirect
//       },
//     ];
//   },
// };

module.exports = nextConfig;

