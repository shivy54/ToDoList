import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDpUYOCB0SiC8VZSHIA5EYfotejNKLIBMA",
    authDomain: "multiplaya-f3751.firebaseapp.com",
    databaseURL: "https://multiplaya-f3751.firebaseio.com",
    projectId: "multiplaya-f3751",
    storageBucket: "multiplaya-f3751.appspot.com",
    messagingSenderId: "219956869172",
    appId: "1:219956869172:web:dbaa3d2fce0b8419eaf261"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
