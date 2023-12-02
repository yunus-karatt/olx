import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdpfZe92M2XrJRnHiGz7n9Otnl9k4eV-M",
  authDomain: "olx-clone-e2c65.firebaseapp.com",
  projectId: "olx-clone-e2c65",
  storageBucket: "olx-clone-e2c65.appspot.com",
  messagingSenderId: "724843775521",
  appId: "1:724843775521:web:892953c17cf4d13cc04560",
  measurementId: "G-L3LFP8X9QD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)
export const storage = getStorage(app);

export default app;
