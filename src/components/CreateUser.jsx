import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

export default function CreateUser() {
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "example2@gmail.com", "Passwords").then(
      (value) => console.log(value)
    );
  };
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h2 className="text-orange-700 text-5xl font-bold mb-10">
        Create User Firebase
      </h2>
      <button
        className="bg-orange-500 text-white w-32 h-10 rounded-md "
        onClick={signUpUser}
      >
        Create User
      </button>
    </div>
  );
}
