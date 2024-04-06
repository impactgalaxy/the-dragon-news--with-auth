import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () => {
        return signOut(auth);
    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setCurrentUser(user);
        })
        return () => unSubscribe();

    }, []);

    const authInfo = {
        createUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
        currentUser,
        toast
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}
