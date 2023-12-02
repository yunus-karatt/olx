import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import{auth,db} from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 

export const FirebaseContext=createContext()

export function FirebaseContextProvider({children}){
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
  return <FirebaseContext.Provider value={{signUp,updateDisplayName,addUser}}>{children}</FirebaseContext.Provider>
}

export function useFirebase(){
  return useContext(FirebaseContext)
}