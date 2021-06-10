import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

export const auth = app.auth()


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
