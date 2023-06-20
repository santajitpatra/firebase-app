import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../firebase";
const firestore = getFirestore(app);

export default function Database() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Mumbai",
      country: "India",
      pincode: "123",
      long: "2015",
    });
    console.log("Result: ", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/UuYPKBEckjDwbJwiSg93/places"), {
      name: "Mumbai is a place to visit",
      description: "The place to visit determines the",
      Date: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "UuYPKBEckjDwbJwiSg93");
    const snap = await getDoc(ref);

    console.log("Document data:", snap.data());
  };

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      console.log(data.data());
    });
  };

  const updateDocument = async () => {
    const ref = doc(firestore, "cities", "UuYPKBEckjDwbJwiSg93");

    await updateDoc(ref, {
      name: "kolkata",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 space-y-8">
      <h2 className="text-orange-700 text-5xl font-bold mb-10">Database</h2>
      <button
        className="bg-orange-500 text-white w-32 h-10 rounded-md "
        onClick={writeData}
      >
        Put Data
      </button>
      <button
        className="bg-orange-500 text-white w-32 h-10 rounded-md "
        onClick={makeSubCollection}
      >
        Put Sub Data
      </button>
      <button
        className="bg-orange-500 text-white w-32 h-10 rounded-md "
        onClick={getDocument}
      >
        Get Document
      </button>
      <button
        className="bg-orange-500 text-white w-32 h-10 rounded-md "
        onClick={getDocumentsByQuery}
      >
        Get Documents By Query
      </button>
      <button
        className="bg-orange-500 text-white w-32 h-10 rounded-md "
        onClick={updateDocument}
      >
        Documents Updata
      </button>
    </div>
  );
}
