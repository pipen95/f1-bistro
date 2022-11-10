// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

const withTM = require('next-transpile-modules')(['react-dnd']);
module.exports = withTM({
  reactStrictMode: false,
  // ...
});
