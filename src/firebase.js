import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5p7u1kyTpoJvewLKTZg908hHuhSbuqQw",
  authDomain: "abcity-92b5d.firebaseapp.com",
  projectId: "abcity-92b5d",
  storageBucket: "abcity-92b5d.appspot.com",
  messagingSenderId: "301248008222",
  appId: "1:301248008222:web:fadabd8c70a467a6c1de0f",
  measurementId: "G-LRHQSZLWDB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);