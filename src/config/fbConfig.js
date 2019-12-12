import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDhcnafYZZ68ihEwelHIBEmAlhN8hByGbs",
  authDomain: "react-forum-a4040.firebaseapp.com",
  databaseURL: "https://react-forum-a4040.firebaseio.com",
  projectId: "react-forum-a4040",
  storageBucket: "react-forum-a4040.appspot.com",
  messagingSenderId: "964963956133",
  appId: "1:964963956133:web:ac4d2421862aad73b1644c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
