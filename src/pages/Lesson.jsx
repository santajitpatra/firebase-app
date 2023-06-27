import CreateUser from '../components/CreateUser';
import CreateUserAndPutData from '../components/CreateUserAndPutData';
import Database from '../components/Database';
import PutData from '../components/PutData';


const Lesson = () => {
  return (
    <div>
      <PutData />
      <CreateUser />
      <CreateUserAndPutData />
      <Database />
    </div>
  );
}

export default Lesson