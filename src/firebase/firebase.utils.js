import firebase from "firebase/app";
import _ from "lodash";
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  Object.values(objectsToAdd).forEach(obj => {
    console.log(obj);
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const covertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    return {
      ...doc.data()
    };
  });
  return _.mapKeys(transformedCollection, "routeName");
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
