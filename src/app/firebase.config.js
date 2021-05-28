import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKlhWGVKmOqaR6viCgsmzYxVuz74PZ3cQ",
    authDomain: "ema-john11.firebaseapp.com",
    projectId: "ema-john11",
    storageBucket: "ema-john11.appspot.com",
    messagingSenderId: "905685045640",
    appId: "1:905685045640:web:14b49c9292e7bdf2e7ea3d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;