import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_NCujqTqKlOmkw-1buXrKP6U64WVsVko",
  authDomain: "atoz-app-248e5.firebaseapp.com",
  projectId: "atoz-app-248e5",
  storageBucket: "atoz-app-248e5.appspot.com",
  messagingSenderId: "289141014229",
  appId: "1:289141014229:web:9791c8c20bdf551aa76c5c",
  measurementId: "G-CJJKLJ302W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
