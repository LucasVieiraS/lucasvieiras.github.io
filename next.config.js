/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    domains: [
      "github.com",
      "avatars.githubusercontent.com",
      "www.notion.so",
      "s3-us-west-2.amazonaws.com",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  /*i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },*/
  trailingSlash: true,
  //output: "export",
  reactStrictMode: true,
  output: "export"

};

module.exports = nextConfig;
