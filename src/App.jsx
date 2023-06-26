import PutData from "./components/PutData";
import CreateUser from "./components/CreateUser";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateUserAndPutData from "./components/CreateUserAndPutData";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app, messaging } from "../firebase";
import { useEffect, useState } from "react";
import Database from "./components/Database";
import {  getToken } from "firebase/messaging";

const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

   async function  requestPermission() {
   const permission = Notification.requestPermission()
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey:
            "BGuP8PLwxcrbHZYQ6278fJ-E1AzXZoYeiYhyu38NU11srZK05OCMzh-hLFq465_efWSka4kYkrffFpMNAR6dZrw",
        });
        console.log("Token:", token);
      } else if (permission === "denied") {
        alert("Notification permission denied.");
      }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  if (user === null) {
    return (
      <div>
        <PutData />
        <CreateUser />
        <SignUp />
        <SignIn />
        <CreateUserAndPutData />
        <Database />
      </div>
    );
  }

  return (
    <div>
      <h2>Hello {user.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );

  // return (
  //   <div>
  //     <PutData />
  //     <CreateUser />
  //     <SignUp />
  //     {/* <h2>Hello {user.email}</h2> */}
  //     {/* <button onClick={() => signOut(auth)}>Logout</button> */}
  //     <SignIn />
  //     <CreateUserAndPutData />
  //   </div>
  // );
}
