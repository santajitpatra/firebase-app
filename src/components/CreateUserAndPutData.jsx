import { useState } from "react";
import { useFirebase } from "../context/firebase";

export default function CreateUserAndPutData() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const putDataNew = () => {
    firebase.putData("grandfather/father/child", { id: 1,
    name: "grandfather",
  age:21,
})
  }
  
  return (
    <div className="flex flex-col  mx-auto justify-center items-center p-10 space-y-10 bg-gray-200">
      <h2 className="text-orange-700 text-5xl font-bold mb-10">putDataNew</h2>
      <div className="max-w-md space-y-10">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Email"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600"
        />
      </div>
      <div className="flex flex-row w-full max-w-md mx-auto justify-center items-center space-x-10">
        <button
          onClick={() => {
            firebase.signUpUserWithEmailAndPassword(email, password);
            firebase.putData("user/" + "santajitpatra", { email, password });
          }}
          className="bg-orange-500 text-white w-32 h-10 rounded-md"
        >
          Sign up
        </button>
        <button
          onClick={putDataNew}
          className="bg-orange-500 text-white w-32 h-10 rounded-md"
        >
          Trigger
        </button>
      </div>
    </div>
  );
}
