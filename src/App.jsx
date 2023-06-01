import PutData from "./components/PutData";
import CreateUser from "./components/CreateUser";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateUserAndPutData from "./components/CreateUserAndPutData";

export default function App() {
  return (
    <div>
      <PutData />
      <CreateUser/>
      <SignUp/>
      <SignIn/>
      <CreateUserAndPutData/>
    </div>
  );
}
