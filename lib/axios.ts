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

export const fetcher = (url: string)=> apiCall.get(url).then(res => res.data.message)