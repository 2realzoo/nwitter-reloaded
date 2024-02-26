import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjqsW6DA4iFHh2oWiQ89lFzB6joR-HCa8",
  authDomain: "nwitter-reloaded-1d18a.firebaseapp.com",
  projectId: "nwitter-reloaded-1d18a",
  storageBucket: "nwitter-reloaded-1d18a.appspot.com",
  messagingSenderId: "897816913403",
  appId: "1:897816913403:web:500b590600be384c70575e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
