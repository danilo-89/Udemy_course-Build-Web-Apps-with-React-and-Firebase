import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBK5ZLcv-fpPHp9sg_a1cOYfCC3KSBXo9I",
    authDomain: "cooking-ninja-site-cae7e.firebaseapp.com",
    projectId: "cooking-ninja-site-cae7e",
    storageBucket: "cooking-ninja-site-cae7e.appspot.com",
    messagingSenderId: "381440282148",
    appId: "1:381440282148:web:25fd332352bede761692b1"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };