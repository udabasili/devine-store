import { Provider } from '../store/appContext'
import 'firebase/firestore'
import 'firebase/auth'
import { FuegoProvider } from 'swr-firestore-v9'
import { fuego } from '../lib/firebaseClient'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { device } from '@/utils/responsiveBreakpoints'
import './app.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app'
import { RouteGuard } from 'routes'
import FirebaseAuthState from '@/features/auth/components/FirebaseAuthState'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-weight: 400;
    color: black;
    line-height: 1.3;
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;

    @media ${device.bigDesktop} {
      font-size: 75%
    }

    @media ${device.tabletLand} {
      font-size: 56.5%
    }
  

    @media ${device.tabletPort} {
      font-size: 50%
    }

    @media ${device.mobile} {
      font-size: 62.5%
    }
  }

  main {
    display: grid;
    grid-template-rows: min-content max-content 1fr;
    grid-template-columns:  [full-start] minmax(2rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 17rem) [col-end]) [center-end] minmax(2rem, 1fr) [full-end];

  }

  
  .u-center-text { text-align: center !important; }

  .u-margin-bottom-small { margin-bottom: 1.5rem !important; }

  .u-margin-bottom-medium {
      margin-bottom: 4rem !important;

      @media ${device.tabletPort} {
        margin-bottom: 3rem !important;

      }
  }
  .u-margin-bottom-big { 
      margin-bottom: 8rem !important;

      @media ${device.tabletPort} {
        margin-bottom: 5rem !important;

      }
  }
  
.u-margin-top-medium { margin-top: 4rem !important; }
.u-margin-top-big { margin-top: 8rem !important; }
.u-margin-top-huge { margin-top: 10rem !important; }

  .Toastify {
    font-size: 1.2rem;
  }


`

const theme = {
  colors: {
    primary:'#6D72C3',
    primaryDark:'#5941A9',
    primaryLight:'#E5D4ED',
    secondaryDark: '#B28451',
    secondaryLight: '#fcddb9'

  },
}


// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <FuegoProvider fuego={fuego}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
            <FirebaseAuthState>
            <Component {...pageProps} />

            </FirebaseAuthState>
      </ThemeProvider>
      </FuegoProvider>
    </Provider>
  )
}
