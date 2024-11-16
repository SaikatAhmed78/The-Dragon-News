import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
 const auth = getAuth(app);

 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const creatNewUser = (email, password) =>{
        setloading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () =>{
        setloading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setloading(true)
       return signOut(auth);
    };

    const updatedUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setloading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);
 
    const authInfo = {
        user,
        setUser,
        creatNewUser,
        userLogin,
        googleLogin,
        githubLogin,
        logOut,
        loading,
        updatedUserProfile
    };
    



    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;