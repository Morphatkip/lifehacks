import firebase from "firebase/app"; // include the Firebase module
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArEggadkIPRaS7ISotKkvRQdfNa-2Pdxw",
  authDomain: "firetiphacks-13abc.firebaseapp.com",
  databaseURL: "https://firetiphacks-13abc-default-rtdb.firebaseio.com",
  projectId: "firetiphacks-13abc",
  storageBucket: "firetiphacks-13abc.appspot.com",
  messagingSenderId: "115191770539",
  appId: "1:115191770539:web:e42fa3196d394c75acf6ee",
  measurementId: "G-8ZJD20VZD3",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export default app;
export const storage = app.storage();
