/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://techwithkunal-blog.vercel.app/blog',
      },
      {
        source: '/blog/:path*',
        destination: 'https://techwithkunal-blog.vercel.app/blog/:path*',
      },
    ];
  },
};

export default nextConfig;
