
import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore"
import "firebase/storage"
// import nodemailer from 'nodemailer';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAbCAcighGGp5vconFgpXYBzHwhf6HRwMM",
    authDomain: "shopaholic-2385d.firebaseapp.com",
    databaseURL: "https://shopaholic-2385d.firebaseio.com",
    projectId: "shopaholic-2385d",
    storageBucket: "shopaholic-2385d.appspot.com",
    messagingSenderId: "977902468780",
    appId: "1:977902468780:web:4a349e5ed7a21481dfe909",
    measurementId: "G-EKWW1CJT1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
  export const store = firebase.firestore();
  export const storage = firebase.storage();
  // export {nodemailer}
 