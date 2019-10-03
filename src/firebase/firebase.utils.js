import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDgPDptehe71cflziCdiCyBaiqzBasLMkI",
  authDomain: "shop-db-edd67.firebaseapp.com",
  databaseURL: "https://shop-db-edd67.firebaseio.com",
  projectId: "shop-db-edd67",
  storageBucket: "",
  messagingSenderId: "655380441434",
  appId: "1:655380441434:web:08421b1d97cfef911aab63",
  measurementId: "G-TMS2KWJB2D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
