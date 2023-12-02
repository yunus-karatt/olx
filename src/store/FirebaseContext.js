import { createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,updateProfile,signOut} from "firebase/auth";
import{auth,db} from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 
import { useAuthContext } from "./AuthContext";

export const FirebaseContext=createContext()

export function FirebaseContextProvider({children}){
  const {setUser}=useAuthContext()
 
  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    // Cleanup function to unsubscribe when the context is unmounted
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }
  function updateDisplayName(name){
   return updateProfile(auth.currentUser,{displayName:name})
  }
  function addUser(id,userName,phone){
    return addDoc(collection(db,'users'),{
      id,userName,phone
    })
  }
  function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }
  // function getUser(){
  //   return new Promise((resolve,reject)=>{
  //    const unsubscribe= onAuthStateChanged(auth,(user)=>{
  //       resolve (user)
  //       unsubscribe()
  //     })
  //   })
  // }
  function logOut(){
    return signOut(auth)
  }
  return <FirebaseContext.Provider value={{signUp,updateDisplayName,addUser,logIn,logOut}}>{children}</FirebaseContext.Provider>
}

export function useFirebase(){
  return useContext(FirebaseContext)
}