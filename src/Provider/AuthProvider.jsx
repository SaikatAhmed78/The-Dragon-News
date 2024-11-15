import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
 const auth = getAuth(app);

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

    const logOut = () => {
        setloading(true)
       return signOut(auth);
    };

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
        logOut,
        loading
    };
    



    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;