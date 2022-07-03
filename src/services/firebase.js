import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

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

// Initialize
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage();
export {
  uploadBytes,
  db,
  auth,
  storage,
  ref,
  getDownloadURL,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  forgotPassword,
};
