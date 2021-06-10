import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/Firebase'


export const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)
 
export const AuthProvider: React.FC = ({children}) => {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser({
        currentUser: user
      })
    })
  }, [])

  const value = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
 