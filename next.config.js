/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        // domains: ['images.unsplash.com','via.placeholder.com','developer.okta.com'],
        remotePatterns:[
            {
                protocol:'https',
                hostname: '*',
            }
        ]
    }
}

module.exports = nextConfig
