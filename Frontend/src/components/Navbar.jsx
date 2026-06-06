import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6">

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
          <Shield className="text-indigo-600" />
        </div>

        <div>
          <h1 className="font-bold text-3xl">
            JITGuard
          </h1>

          <p className="text-gray-500 text-sm">
            AI Code Review Assistant
          </p>
        </div>

      </div>

      <div className="flex gap-10 text-gray-700">

        <a href="#">Features</a>
        <a href="#">How it works</a>
        <a href="#">Docs</a>
        <a href="#">About</a>

      </div>

      <div className="flex gap-4">

        <Link to="/login">

  <button
    className="
    border
    px-6
    py-3
    rounded-xl
    "
  >
    Sign In
  </button>

</Link>

 
        <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-semibold
              shadow-lg
            "
          >
            Get Started
          </motion.button>

      </div>

    </nav>
  );
}