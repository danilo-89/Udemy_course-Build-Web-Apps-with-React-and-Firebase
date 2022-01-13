import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDMQr0sba2HssrnWyJEhbFThZmgGqf1D20',
	authDomain: 'mymoney-be275.firebaseapp.com',
	projectId: 'mymoney-be275',
	storageBucket: 'mymoney-be275.appspot.com',
	messagingSenderId: '591220426996',
	appId: '1:591220426996:web:dfe4268c1296a1d078b6a1',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
