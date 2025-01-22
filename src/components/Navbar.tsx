import { Vault } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10 h-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between p-2">
          <div className="flex items-end space-x-2">
            <Vault className="size-8 text-indigo-600" />
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                StateVault
              </span>
            </Link>
          </div>
          <div className="flex items-center ">
            <a
              href="https://github.com/yourusername/statevault"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
