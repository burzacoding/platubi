import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBg86Yk5cuWXZ4N47kFD7Abg4BQCtRpVBM",
  authDomain: "dev-platubi.firebaseapp.com",
  projectId: "dev-platubi",
  storageBucket: "dev-platubi.appspot.com",
  messagingSenderId: "1072964576793",
  appId: "1:1072964576793:web:7b425dd12066a4b021ac88"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth()

const db = app.firestore()

const userDocumentRef = (currentUserUid: string) => {
  return db.collection('users').doc(currentUserUid)
}

const registersCollectionRef = (currentUserUid: string) => {
  return db.collection('users').doc(currentUserUid).collection('registers')
}

export { auth, db, userDocumentRef, registersCollectionRef}
