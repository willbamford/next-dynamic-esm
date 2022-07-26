/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config, { webpack }) => {
    console.log(`webpack version: ${webpack.version}`);

    // config.resolve.extensionAlias = {
    //   ".js": [".ts", ".js"],
    //   ".jsx": [".tsx", ".jsx"],
    // };

    config.plugins = [
      ...config.plugins,
      // See: https://github.com/webpack/webpack/issues/13252
      new webpack.NormalModuleReplacementPlugin(
        new RegExp(/^\..+\.jsx$/),
        function (resource) {
          resource.request = resource.request.replace(new RegExp(/\.jsx$/), "");
        }
      ),
    ];

    return config;
  },
};

module.exports = nextConfig;
