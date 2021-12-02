import React, { useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword  , getAuth  , signOut} from "@firebase/auth"
import {app} from "../api/firebase"

const AuthContext = React.createContext()
const auth = getAuth();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
  }

  function login(email, password) {
  }

  function logout() {
    return signOut()
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
    login,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}