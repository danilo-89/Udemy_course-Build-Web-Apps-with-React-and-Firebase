import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCR-sTV-R-Yw-y4VMonpJrvXw2V496THCU',
	authDomain: 'thedojosite-3e36b.firebaseapp.com',
	projectId: 'thedojosite-3e36b',
	storageBucket: 'thedojosite-3e36b.appspot.com',
	messagingSenderId: '652949445437',
	appId: '1:652949445437:web:a18b607d08c4edf5364354',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
