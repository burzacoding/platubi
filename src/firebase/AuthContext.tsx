import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
} 
 
export const AuthProvider: React.FC = () => {

  const [currentUser, setCurrentUser] = useState({})

  // function signUp({ email, password}) {
  //   return auth.createUserWithEmailAndPassword(email, password)
  // }

  const value = {
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      {/* {children} */}
    </AuthContext.Provider>
  );
}
 