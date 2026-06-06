import { Link } from "react-router-dom";
import { GitBranch, Lock, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function RepoCard({ repo }) {

  const riskColor = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700"
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      bg-white
      rounded-3xl
      p-6
      border
      shadow-sm
      "
    >

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-semibold">
          {repo.name}
        </h2>

        {repo.visibility === "Public" ? (
          <Globe size={20} />
        ) : (
          <Lock size={20} />
        )}

      </div>

      <p className="mt-4 text-gray-500">
        {repo.visibility} Repository
      </p>

      <div className="mt-6 flex items-center gap-2">

        <GitBranch size={18} />

        <span>
          {repo.commits} commits analyzed
        </span>

      </div>

      <div className="mt-6">

        <span
          className={`
          px-4
          py-2
          rounded-full
          text-sm
          font-medium
          ${riskColor[repo.risk]}
          `}
        >
          {repo.risk} Risk
        </span>

      </div>

      <Link
        to={`/repositories/${repo.id}`}
      >

        <button
          className="
          mt-8
          w-full
          bg-indigo-600
          text-white
          py-3
          rounded-xl
          "
        >
          Open Repository
        </button>

      </Link>

    </motion.div>
  );
}