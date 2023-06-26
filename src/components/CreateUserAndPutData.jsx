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
    <div>
      <h2>App</h2>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter Password"
      />
      <button onClick={() => {firebase.signUpUserWithEmailAndPassword(email, password);
      firebase.putData("user/" + "santajitpatra" , {email, password})}} >Sign up</button>

            <button onClick={putDataNew} >Trigger</button>
    </div>
  );
}
