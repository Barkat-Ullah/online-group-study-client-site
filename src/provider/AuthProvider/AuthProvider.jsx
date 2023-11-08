import React, { createContext, useEffect, useState } from "react";
import app from "../../config/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    
    React.useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
  

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () => {
    
        return signInWithPopup(auth,googleProvider)
    }
    const githubSign = () => {
     
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
          
            setUser(currentUser)
            setLoader(false)
   
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {user,loader,toggleTheme, createUser, logOut, signIn, googleSign, githubSign }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;