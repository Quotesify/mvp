import firebase from 'firebase/app';
import 'firebase/storage';
import api_key from './api_key';

// Initialize Firebase
var config = {
   apiKey: api_key,
   authDomain: "quotesify-421ca.firebaseapp.com",
   databaseURL: "https://quotesify-421ca.firebaseio.com",
   projectId: "quotesify-421ca",
   storageBucket: "quotesify-421ca.appspot.com",
   messagingSenderId: "677878174342" };
 
 firebase.initializeApp(config);
 const storage = firebase.storage();
 export {
    storage, firebase as default
 }