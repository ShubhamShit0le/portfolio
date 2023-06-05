import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAfUMCvFNkkG5FORXE49qIbmt7raeoBEfo",
//   authDomain: "react-portfolio-app-95b0d.firebaseapp.com",
//   databaseURL: "https://react-portfolio-app-95b0d-default-rtdb.firebaseio.com",
//   projectId: "react-portfolio-app-95b0d",
//   storageBucket: "react-portfolio-app-95b0d.appspot.com",
//   messagingSenderId: "331103233010",
//   appId: "1:331103233010:web:f5eafbb8036a8eb0a6c16b",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBuJvOBzxa5NR5OazLtwDz15p5DBGdEjGA",
  authDomain: "portfolio-96c77.firebaseapp.com",
  projectId: "portfolio-96c77",
  storageBucket: "portfolio-96c77.appspot.com",
  messagingSenderId: "155628297513",
  appId: "1:155628297513:web:ebaafa54e0172650b7eb38",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
