import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQQinMcn4KkqouK6LlD8Y9_KZaIXxjweE",
  authDomain: "very-hot-burgers-8e842.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-8e842-default-rtdb.europe-west1.firebasedatabase.app",
  }
);

const base = Rebase.createClass(firebaseApp.database())


export {firebaseApp};
export default base;
