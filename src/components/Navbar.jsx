import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 w-full shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between">
          <a href="/" className="flex items-center py-4 px-2 text-white">
            <span className="font-semibold text-xl">My Website</span>
          </a>
          <ul className="flex ml-auto p-5">
            <li className="mr-4">
              <Link to={"/"} className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link to={"/lesson"} className="text-white hover:text-gray-300">
                Lesson
              </Link>
            </li>
            <li className="mr-4">
              <Link to={"/signup"} className="text-white hover:text-gray-300">
                SignUp
              </Link>
            </li>
            <li className="mr-4">
              <Link to={"/signin"} className="text-white hover:text-gray-300">
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
