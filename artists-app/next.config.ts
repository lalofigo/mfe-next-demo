/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Rutas para albums-app
      {
        source: "/albums",
        destination: `${process.env.ALBUMS_DOMAIN || "http://localhost:3001"}/albums`,
      },
      {
        source: "/albums/:path*",
        destination: `${process.env.ALBUMS_DOMAIN || "http://localhost:3001"}/albums/:path*`,
      },
      {
        source: "/albums-static/:path*",
        destination: `${process.env.ALBUMS_DOMAIN || "http://localhost:3001"}/albums-static/:path*`,
      },

      // Rutas para dashboard-app
      {
        source: "/artists",
        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3002"}/artists`,
      },
      {
        source: "/artists/:path*",
        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3002"}/artists/:path*`,
      },
      {
        source: "/artists-static/:path*",
        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3002"}/artists-static/:path*`,
      },

      // Rutas para genres-app
      {
        source: "/genres",
        destination: `${process.env.GENRES_DOMAIN || "http://localhost:3003"}/genres`,
      },
      {
        source: "/genres/:path*",
        destination: `${process.env.GENRES_DOMAIN || "http://localhost:3003"}/genres/:path*`,
      },
      {
        source: "/genres-static/:path*",
        destination: `${process.env.GENRES_DOMAIN || "http://localhost:3003"}/genres-static/:path*`,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: "/artists",
  basePath: "/artists",
  output: "export",
}

module.exports = nextConfig
