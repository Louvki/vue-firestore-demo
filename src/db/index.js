import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBmWJgXWrPXM_SKc6tcpNf6ZOZ4V_8IUBY',
  authDomain: 'real-world-vue-a36fb.firebaseapp.com',
  databaseURL: 'https://real-world-vue-a36fb.firebaseio.com',
  projectId: 'real-world-vue-a36fb',
  storageBucket: 'real-world-vue-a36fb.appspot.com',
  messagingSenderId: '1093571889018',
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
