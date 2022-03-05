import Axios, { AxiosRequestConfig } from 'axios';
import config from '../config';
import { auth } from './firebaseClient';

let url 

if (process.env.NODE_ENV === "development") {
  url = config.urlDev
} else {
  url = config.urlProd
}

interface CustomRequestProps extends AxiosRequestConfig {
  headers: {
    authorization: string
  }
}


export const apiCall = Axios.create({
    baseURL: url,
});

apiCall.interceptors.request.use(authRequestInterceptor)

async function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = await auth.currentUser?.getIdToken(true)
  let  customConfig: CustomRequestProps = {
    ...config,
    headers: {
      authorization: ''
    }
  }
  if (token) {
    customConfig.headers.authorization = `${token}`;
  }
  return customConfig;
}

export const fetcher = async (url: string) => {
  const token = await auth.currentUser?.getIdToken(true)

  return fetch(url, {
    headers: { 
      authorization: token || ''
    }
  }).then((res) => res.json()).then(res => res.message)
}


// export const fetcher = (url: string)=> fe.get(url).then(res => res.data.message)