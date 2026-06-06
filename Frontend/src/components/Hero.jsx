import { PlayCircle, Shield, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-indigo-100
            text-indigo-700
            font-medium
          "
        >
          AI-Powered Commit Risk Detection
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-8
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
        >
          Predict Risky Commits
          <br />

          <span
            className="
              bg-linear-to-r
              from-blue-500
              via-indigo-500
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            Before They Reach Production
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-8
            text-lg
            md:text-xl
            text-gray-600
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          JITGuard analyzes GitHub commits and pull requests using
          Machine Learning and Explainable AI to identify bug-inducing
          code changes before they impact your software.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-12
            flex
            flex-col
            md:flex-row
            justify-center
            gap-5
          "
        >
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
            Connect Repository
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              border-2
              border-indigo-600
              text-indigo-600
              px-8
              py-4
              rounded-2xl
              text-lg
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              hover:bg-indigo-50
            "
          >
            <PlayCircle size={22} />
            Try Demo
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-8
            text-gray-500
          "
        >
          <div className="flex items-center gap-2">
            <Shield size={18} />
            <span>Satisfaction Guaranteed</span>
          </div>

          <div className="flex items-center gap-2">
            <Lock size={18} />
            <span>100% Secure</span>
          </div>

          <div className="flex items-center gap-2">
            <Zap size={18} />
            <span>Save Developer Time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}