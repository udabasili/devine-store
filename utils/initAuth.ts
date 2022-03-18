import { init } from 'next-firebase-auth'
import config from '../config'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/auth/login', // required
    logoutAPIEndpoint: '/api/auth/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: config.firebaseAdminCredential.projectId as string,
        clientEmail: config.firebaseAdminCredential.clientEmail as string,
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
        : undefined
      },
      databaseURL: config.firebaseDatabaseUrl as string,
    },
    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
        apiKey: "AIzaSyCbStKzjwJHUiTDGIgRzYzQ6JpbppcU3qY",
        authDomain: "devine-jewellry.firebaseapp.com",
        projectId: "devine-jewellry",
        storageBucket: "devine-jewellry.appspot.com",
        messagingSenderId: "764213635093",
        appId: "1:764213635093:web:773f9f9de1562f52c0c61c",
        measurementId: "G-DH29M4R830",
    },
    cookies: {
      name: 'devineCookies', 
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure:  process.env.NODE_ENV === "production", // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth