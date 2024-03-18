/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://codewithkunal-blog.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://codewithkunal-blog.app/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
