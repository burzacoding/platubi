import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/Firebase'
import firebase from 'firebase/app'


interface AuthContextInterface {
  currentUser: firebase.User | null;
  signupWithMailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  loginWithMailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void> | undefined;
  updatePassword: (password: string) => Promise<void> | undefined;
  loginGoogle: () => void;
  loginFacebook: () => void;
  userDocumentRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | undefined
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

export function useAuth() {
  return useContext(AuthContext)
}
 
export const AuthProvider: React.FC = ({children}) => {

  const [currentUser, setCurrentUser] = useState<null | firebase.User>(null)
  const [userDocumentRef, setUserDocumentRef] = useState<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>()
  const [loading, setLoading] = useState(true)

  function signupWithMailAndPassword(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  
  function loginWithMailAndPassword(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout () {
    return auth.signOut()
  }
  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email: string) {
    return currentUser?.updateEmail(email)
  }

  function updatePassword(password: string) {
    return currentUser?.updatePassword(password)
  }

  function loginGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      return res? res : undefined
    })
    .catch(error => {
      console.log(error);
      
    })
  }

  function loginFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      return res? res : undefined
    })
    .catch(error => {
      return
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    currentUser && setUserDocumentRef(db.collection('users').doc(currentUser.uid)) 
    return unsubscribe
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    currentUser,
    signupWithMailAndPassword,
    loginWithMailAndPassword,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    loginGoogle,
    loginFacebook,
    userDocumentRef,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
 