import { Shield, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="
      min-h-screen
      bg-[#F8F7F4]
      flex
      items-center
      justify-center
      px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        bg-white
        w-full
        max-w-md
        rounded-3xl
        shadow-xl
        p-10
        "
      >
        {/* Logo */}

        <div className="flex justify-center">

          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-indigo-100
            flex
            items-center
            justify-center
            "
          >
            <Shield
              size={30}
              className="text-indigo-600"
            />
          </div>

        </div>

        {/* Title */}

        <h1
          className="
          text-4xl
          font-bold
          text-center
          mt-6
          "
        >
          Welcome Back
        </h1>

        <p
          className="
          text-center
          text-gray-500
          mt-2
          "
        >
          Sign in to JITGuard
        </p>

        {/* GitHub Button */}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
          mt-8
          w-full
          bg-black
          text-white
          py-4
          rounded-2xl
          flex
          items-center
          justify-center
          gap-3
          font-medium
          "
        >
          <LogIn size={22} />

          Continue with GitHub
        </motion.button>

        {/* Divider */}

        <div
          className="
          flex
          items-center
          gap-4
          my-8
          "
        >
          <div className="flex-1 h-px bg-gray-200" />

          <span className="text-gray-400">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email */}

        <div>

          <label className="font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
            mt-2
            w-full
            border
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-indigo-400
            "
          />

        </div>

        {/* Password */}

        <div className="mt-5">

          <label className="font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="
            mt-2
            w-full
            border
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-indigo-400
            "
          />

        </div>

        {/* Sign In */}

        
        <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/repositories")}
  className="
  mt-8
  w-full
  bg-indigo-600
  text-white
  py-4
  rounded-xl
  font-semibold
  "
>
  Sign In
</motion.button>

        {/* Footer */}

        <p
          className="
          text-center
          text-gray-500
          mt-6
          "
        >
          Don't have an account?

          <span
            className="
            text-indigo-600
            ml-2
            cursor-pointer
            "
          >
            Sign Up
          </span>
        </p>

      </motion.div>
    </div>
  );
}