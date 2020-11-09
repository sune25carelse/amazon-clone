// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8ZaD97gnw1wsBdA2XltkrvIGJj4XkETU",
    authDomain: "clone-8dfc1.firebaseapp.com",
    databaseURL: "https://clone-8dfc1.firebaseio.com",
    projectId: "clone-8dfc1",
    storageBucket: "clone-8dfc1.appspot.com",
    messagingSenderId: "588196983726",
    appId: "1:588196983726:web:1d078cedc52e603ebbce3f",
    measurementId: "G-KF71SEG874"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };