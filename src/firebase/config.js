import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqzMokRPAtONu18Lji7OY1xYxzIJfclWg",
  authDomain: "firegram-1f8d5.firebaseapp.com",
  projectId: "firegram-1f8d5",
  storageBucket: "firegram-1f8d5.appspot.com",
  messagingSenderId: "659015757148",
  appId: "1:659015757148:web:2705f3352b5524dad7e599"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  projectStorage,
  projectFirestore,
  timestamp
};