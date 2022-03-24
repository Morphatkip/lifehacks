import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArEggadkIPRaS7ISotKkvRQdfNa-2Pdxw",
  authDomain: "firetiphacks-13abc.firebaseapp.com",
  databaseURL: "https://firetiphacks-13abc-default-rtdb.firebaseio.com",
  projectId: "firetiphacks-13abc",
  storageBucket: "firetiphacks-13abc.appspot.com",
  messagingSenderId: "115191770539",
  appId: "1:115191770539:web:e42fa3196d394c75acf6ee",
  measurementId: "G-8ZJD20VZD3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
