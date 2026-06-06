import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function AnalyzeCommit() {

  const navigate = useNavigate();

  /*const [formData, setFormData] = useState({
    repository: "",
    commitHash: "",
    branch: ""
  });*/

  const handleAnalyze = () => {

    // Later this will call FastAPI

    navigate("/report/123");
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4]">

      <div className="max-w-4xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold">
          Analyze Commit
        </h1>

        <p className="text-gray-500 mt-3">
          Predict whether a commit is likely to introduce bugs.
        </p>

        <div
          className="
          mt-12
          bg-white
          rounded-3xl
          p-8
          border
          "
        >

          {/* Repository */}

          <div>

            <label className="font-semibold">
              Repository URL
            </label>

            <input
              type="text"
              placeholder="https://github.com/user/repo"
              className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              "
            />

          </div>

          {/* Commit */}

          <div className="mt-6">

            <label className="font-semibold">
              Commit Hash
            </label>

            <input
              type="text"
              placeholder="a1b2c3d"
              className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              "
            />

          </div>

          {/* Branch */}

          <div className="mt-6">

            <label className="font-semibold">
              Branch
            </label>

            <input
              type="text"
              placeholder="main"
              className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              "
            />

          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAnalyze}
            className="
            mt-8
            bg-indigo-600
            text-white
            px-8
            py-4
            rounded-xl
            flex
            items-center
            gap-2
            "
          >
            <Search size={20} />

            Analyze Commit
          </motion.button>

        </div>

      </div>

    </div>
  );
}