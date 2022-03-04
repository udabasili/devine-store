export const publicRoutes = <const>[
    '/',
    '/auth',
    '/blog/**',
    '/products/**'

]

export type PublicRoutesProps = typeof publicRoutes[number]
