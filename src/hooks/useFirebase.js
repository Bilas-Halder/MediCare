import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, FacebookAuthProvider } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [servicesData, setServicesData] = useState([]);
    const [doctorsData, setDoctorsData] = useState([]);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const logInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    };


    const updateName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    }

    // code for email sign in and sign Up
    const signUpUsingEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUsingEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };



    //Facebook login system
    const loginUsingFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }


    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            }
            else if (auth.currentUser) {
                setUser(auth.currentUser);
            }
            setLoading(false);
        })
    }, [auth, logged]);


    // logOut for all the signIn
    const logout = (path, history) => {
        setLoading(true);

        signOut(auth)
            .then(() => {
                setUser({});
                history.push(path || '/home');
            })
            .finally(setLoading(false));
    }

    return {
        user,
        logged,
        loading,
        servicesData,
        doctorsData,
        setServicesData,
        setDoctorsData,
        setUser,
        setLogged,
        setLoading,
        updateName,
        signUpUsingEmail,
        logInUsingGoogle,
        loginUsingFacebook,
        logInUsingEmail,
        logout
    };
};

export default useFirebase;