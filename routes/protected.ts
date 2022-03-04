export const privateRoutes = <const>[
    '/tracking',
    '/shopping-cart',
    '/checkout'
]

export type PrivateRoutProps = typeof privateRoutes[number]

