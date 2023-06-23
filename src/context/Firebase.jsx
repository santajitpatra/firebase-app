import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";

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
  const [name, setName ] = useState("");

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const putData = (key, data) => set(ref(database, key), data);

  // get(child(ref(database), "grandfather/father/child")).then((snapshot) => {
  //   console.log(snapshot.val())
  // })


  useEffect(() => {
    onValue(ref(database, "grandfather/father/child" ), (snapshot) => {
      setName(snapshot.val().name)
    });
  }, [])

  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      <h3>name is {name}</h3>
      {props.children}
    </FirebaseContext.Provider>
  );
};
