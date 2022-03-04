import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Fuego } from 'swr-firestore-v9'

export const firebaseConfig = {
  apiKey: "AIzaSyCbStKzjwJHUiTDGIgRzYzQ6JpbppcU3qY",
  authDomain: "devine-jewellry.firebaseapp.com",
  projectId: "devine-jewellry",
  storageBucket: "devine-jewellry.appspot.com",
  messagingSenderId: "764213635093",
  appId: "1:764213635093:web:773f9f9de1562f52c0c61c",
  measurementId: "G-DH29M4R830",
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const fuego = new Fuego(firebaseConfig)


