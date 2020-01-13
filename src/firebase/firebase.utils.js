import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBu-1uAZfxouiNyVwuyKo1zRBatffkacsI",
  authDomain: "crowndb-db2db.firebaseapp.com",
  databaseURL: "https://crowndb-db2db.firebaseio.com",
  projectId: "crowndb-db2db",
  storageBucket: "crowndb-db2db.appspot.com",
  messagingSenderId: "6834679221",
  appId: "1:6834679221:web:0a4944205f25c8cdf97dfc",
  measurementId: "G-H6Y0VXH0KR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();
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
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
