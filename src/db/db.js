import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'yourKey',
  authDomain: 'yourKey',
  databaseURL: 'yourKey',
  projectId: 'yourKey',
  storageBucket: 'yourKey',
  messagingSenderId: 'yourKey',
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
