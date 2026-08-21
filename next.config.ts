import type { NextConfig } from "next";

// GitHub Pages（プロジェクトページ）で公開するための設定。
// https://<username>.github.io/<repo>/ の形で配信されるため、
// サブパス配信に対応する basePath / assetPrefix を設定している。
const repoName = "korean-lotion-pack-guide";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
