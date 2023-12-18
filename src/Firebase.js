
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAHWZTI0XNvM7QsEHyMpFx1hZOFRGfeE4g",
  authDomain: "stockmarketapp-a5aa5.firebaseapp.com",
  projectId: "stockmarketapp-a5aa5",
  storageBucket: "stockmarketapp-a5aa5.appspot.com",
  messagingSenderId: "793469643975",
  appId: "1:793469643975:web:0264a6cf4e6bb6987922e2",
  measurementId: "G-07PPBQFY3P"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db= getFirestore(app);
// export const signInWithEmailAndPassworD=signInWithEmailAndPassword(app);

export const googleProvider = new GoogleAuthProvider();



