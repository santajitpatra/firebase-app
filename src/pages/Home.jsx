import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebase";
import SignUp from "./SignUp";


const auth = getAuth(app);


const Home = () => {
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

  if (user === null) {
    return (
      <div className="mt-16">
        <h2 className="flex justify-center items-center text-fuchsia-700 text-5xl font-bold mb-10">
          Home
        </h2>
        <SignUp />
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h2 className="flex justify-center items-center text-fuchsia-700 text-5xl font-bold mb-10">
        Home
      </h2>
      <h2>Hello {user.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );

};

export default Home;
