import { getAuth,GoogleAuthProvider , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, getIdToken } from "firebase/auth";
import { useState,useEffect } from 'react';

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [carts,setCart] = useState([])
    const [token, setToken] = useState('');
    const auth = getAuth();


   const registerUser = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user  = userCredential.user;
        setUser(user)
        console.log(user,email,password)
      })
      .catch((error) => {
      })
};

    
    const login  = (email,password ) => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user  = userCredential.user;
            setUser(user)
            console.log(user)
        })
        .catch((error)=> { 
            
        })
    }

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
    }
     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({})
            }
        })
    }, [auth])


    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCart(data)})
    }, [user])

    return {
        login,
        registerUser,
        user,
        carts,
        logOut
    }
}


export default useFirebase;