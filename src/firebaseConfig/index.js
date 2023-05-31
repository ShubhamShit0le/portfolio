import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfUMCvFNkkG5FORXE49qIbmt7raeoBEfo",
  authDomain: "react-portfolio-app-95b0d.firebaseapp.com",
  databaseURL: "https://react-portfolio-app-95b0d-default-rtdb.firebaseio.com",
  projectId: "react-portfolio-app-95b0d",
  storageBucket: "react-portfolio-app-95b0d.appspot.com",
  messagingSenderId: "331103233010",
  appId: "1:331103233010:web:f5eafbb8036a8eb0a6c16b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
