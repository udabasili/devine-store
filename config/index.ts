export default {
    stripeSecretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    env: process.env.NODE_ENV,
    firebaseAdminCredential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') ,
    },
    firebaseDatabaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    urlProd:  process.env.NEXT_PUBLIC_API_URL_PROD,
    urlDev:  process.env.NEXT_PUBLIC_API_URL_DEV,
    mongoDBProd: process.env.MONGODB_URI  as string,


}