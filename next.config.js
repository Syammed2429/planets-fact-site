const path = require('path')

/** @type {import('next').NextConfig} */
const name = 'mercury'
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: `/planet/${name}`,
                permanent: true,
            },
        ];
    },

}

module.exports = nextConfig
