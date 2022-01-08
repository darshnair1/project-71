import firebase from "firebase";
// require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC6Mcb8xJxeRX42871jTiQ3ATE3jQkeVBw",
    authDomain: "e-ride-97f4a.firebaseapp.com",
    projectId: "e-ride-97f4a",
    storageBucket: "e-ride-97f4a.appspot.com",
    messagingSenderId: "143326200675",
    appId: "1:143326200675:web:1e13211a7ddf25402c0956"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();