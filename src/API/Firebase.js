import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUuWZiHBGDH_PVs9IqR9T36VQnD-ZHNsw",
  authDomain: "hosting-2c2e6.firebaseapp.com",
  projectId: "hosting-2c2e6",
  storageBucket: "hosting-2c2e6.appspot.com",
  messagingSenderId: "137438084125",
  appId: "1:137438084125:web:a0dbf82fb9017555e01af4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {provider , auth , db };