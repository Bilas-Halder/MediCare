import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, sendEmailVerification } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);

    };



    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth, logged]);


    // logOut for all the signIn
    const logout = (path, history) => {
        signOut(auth)
            .then(() => {
                setUser({});
                history.push(path || '/home');
            })
    }

    return {
        user,
        logged,
        setUser,
        setLogged,
        logInUsingGoogle,
        logout
    };
};

export default useFirebase;