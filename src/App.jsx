import PutData from "./components/PutData";
import CreateUser from "./components/CreateUser";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateUserAndPutData from "./components/CreateUserAndPutData";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import Database from "./components/Database";

const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div>
        <PutData />
        <CreateUser />
        <SignUp />
        <SignIn />
        <CreateUserAndPutData />
        <Database/>
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
