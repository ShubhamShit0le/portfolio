// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const StartFirebase = ()=> {

     const firebaseConfig = {

        apiKey: "AIzaSyAfUMCvFNkkG5FORXE49qIbmt7raeoBEfo",
        authDomain: "react-portfolio-app-95b0d.firebaseapp.com",
        databaseURL: "https://react-portfolio-app-95b0d-default-rtdb.firebaseio.com",
        projectId: "react-portfolio-app-95b0d",
        storageBucket: "react-portfolio-app-95b0d.appspot.com",
        messagingSenderId: "331103233010",
        appId: "1:331103233010:web:f5eafbb8036a8eb0a6c16b"
      };

      // Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app);

     }


export default StartFirebase;
