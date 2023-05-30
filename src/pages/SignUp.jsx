import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useState } from 'react'


const auth = getAuth(app);

const SignUp = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("Successfully")
    );
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto justify-center items-center p-10 space-y-10">
      <h2 className="text-green-700 text-5xl font-bold mb-10">Create SingUp</h2>

      <label className="block mb-1">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter Your Email Here"
        className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600"
      />
      <label className="block mb-1">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter Your Password Here"
        className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600"
      />
      <button
        className="bg-green-500 text-white w-32 h-10 rounded-md "
        onClick={createUser}
      >
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
