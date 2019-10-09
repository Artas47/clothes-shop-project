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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
