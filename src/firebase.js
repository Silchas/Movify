// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAu1SZSrpWLvPKtRlTD1r2sbKAzvC51MQs',
  authDomain: 'movie-site-46822.firebaseapp.com',
  projectId: 'movie-site-46822',
  storageBucket: 'movie-site-46822.appspot.com',
  messagingSenderId: '477699243992',
  appId: '1:477699243992:web:db9859335bd4a948b'
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)