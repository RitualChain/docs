import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/docs/overview",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/docs/overview",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
