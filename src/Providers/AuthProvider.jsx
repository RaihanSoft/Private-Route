/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/firebase.config"

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);

    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }




    const authInfo = {

        createUser,
        loginUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("currentUser", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }

    }, [])




    // onAuthStateChanged(auth, currentUser => {
    //     if (currentUser) {
    //         console.log("currently log user", currentUser)
    //         setUser(currentUser)
    //     }
    //     else {
    //         console.log("No user Log in")
    //         setUser(null)

    //     }
    // })



    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
