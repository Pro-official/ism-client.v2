// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { BrainCircuit, Menu } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center mx-auto">
            <Link to="/" className="flex-shrink-0 flex items-center mx-auto">
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">
                IdeaHub
              </span>
            </Link>
            <BrainCircuit className="h-8 w-8 ml-2 text-green-400" />
            <Link to="/account">
              <p className="text-white/90 ml-3 font-bold text-sm border-2 rounded-full w-10 h-10 p-2 flex items-center justify-center bg-gradient-to-r from-[#001F3F] to-[#3A6D8C]">
                {user?.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user?._id ? (
              <>
                {/* <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-black/10 hover:bg-black/50 text-white/90 font-semibold transition-all  border border-white/50"
                >
                  Logout
                </button> */}
              </>
            ) : (
              <>
                {/* <Link to="/login">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white/90 font-semibold transition-all">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white/90 font-bold transition-all">
                    Register
                  </button>
                </Link> */}
              </>
            )}
            {/* {user?.role === "Admin" && (
              <Link to="/role-change">
                <button className="px-4 py-2 rounded-lg bg-black/10 hover:bg-black/50 font-semibold text-white/90 transition-all border border-white/50">
                  Admin
                </button>
              </Link>
            )} */}
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-white/90" />
          </div>
        </div>
      </div>
    </nav>
  );
}
