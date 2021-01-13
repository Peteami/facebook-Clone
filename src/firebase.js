import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7bJVCfVrEbBtXiQ20fmGERgVnzJr_FH8",
    authDomain: "blog-86709.firebaseapp.com",
    projectId: "blog-86709",
    storageBucket: "blog-86709.appspot.com",
    messagingSenderId: "328091812116",
    appId: "1:328091812116:web:a4cb1f77be3973dcc4c201",
    measurementId: "G-HB9RXEVYP6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;