/** @type {import('next').NextConfig} */
const nextConfig = {
  //웹팩을 통해 svg 파일을 리액트 컴포넌트로 변환하는 설정
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default nextConfig;
