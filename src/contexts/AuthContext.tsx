import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/Firebase'
import firebase from 'firebase/app'

export const AuthContext = createContext<any>(null)

export function useAuth() {
  return useContext(AuthContext)
}
 
export const AuthProvider: React.FC = ({children}) => {

  const [currentUser, setCurrentUser] = useState<null | firebase.User>(null)
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signupWithMailAndPassword,
    loginWithMailAndPassword,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
 