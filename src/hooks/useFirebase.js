import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, sendEmailVerification } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [error, setError] = useState('');
    const [servicesData, setServicesData] = useState([]);


    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);

    };


    const updateName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    }

    // code for email sign in and sign Up
    const signUpUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };




    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            }
            else if (auth.currentUser) {
                setUser(auth.currentUser);
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
        servicesData,
        setServicesData,
        setUser,
        setLogged,
        updateName,
        signUpUsingEmail,
        logInUsingGoogle,
        logInUsingEmail,
        logout
    };
};

export default useFirebase;