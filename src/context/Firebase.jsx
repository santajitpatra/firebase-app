import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlqEEIJcpZKDMaSjjRNGKygCk185VsLKA",
  authDomain: "fir-app-6887b.firebaseapp.com",
  projectId: "fir-app-6887b",
  storageBucket: "fir-app-6887b.appspot.com",
  messagingSenderId: "360106724818",
  appId: "1:360106724818:web:aa519de908f4c05f864c0b",
  databaseURL: "lhttps://fir-app-6887b-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const putData = (key, data) => set(ref(database, key), data);
  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
