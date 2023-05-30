import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase";


const db = getDatabase(app);
const putData = () => {
  set(ref(db, "users/santajt"), {
    id: "1",
    username: "Santajt Patra",
    email: "example@gmail.com",
  });
};

export default function PutData() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h2 className="text-blue-700 text-5xl font-bold mb-10">
        React Firebase 1!
      </h2>
      <button
        className="bg-blue-500 text-white w-20 h-10 rounded-md "
        onClick={putData}
      >
        Put Data
      </button>
    </div>
  );
}
