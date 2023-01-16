import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
/* import env from "react-dotenv"; */
const firebaseConfig = {
  /*  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID, */

  apiKey: "AIzaSyArEggadkIPRaS7ISotKkvRQdfNa-2Pdxw",
  authDomain: "firetiphacks-13abc.firebaseapp.com",
  databaseURL: "https://firetiphacks-13abc-default-rtdb.firebaseio.com",
  projectId: "firetiphacks-13abc",
  storageBucket: "firetiphacks-13abc.appspot.com",
  messagingSenderId: "115191770539",
  appId: "1:115191770539:web:e42fa3196d394c75acf6ee",
  measurementId: "G-8ZJD20VZD3",
};
// initialize firebase and firebase authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  auth,
  db,
  doc,
  getDoc,
  collection,
  getDocs,
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  setDoc,
};
