module.exports = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  optimizeFonts: false,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/login': { page: '/login' },
      '/signup': { page: '/signup' },
      '/services': { page: '/services' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}
