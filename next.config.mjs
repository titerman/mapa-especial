import createMDX from '@next/mdx'

const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  experimental: { esmExternals: 'loose' },
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX()

export default withMDX(nextConfig);