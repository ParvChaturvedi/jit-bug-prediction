import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitBranch, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const analyzeRepository = async () => {
  if (!repoUrl.trim()) {
    setError("Please enter a GitHub repository URL.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const response = await fetch(
      "http://localhost:5000/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repo_url: repoUrl,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to analyze repository."
      );
    }

    localStorage.setItem(
      "analysisResult",
      JSON.stringify(data)
    );

    navigate("/results");

  } catch (err) {
    console.error(err);

    setError(
      err.message || "Something went wrong."
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000')",
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-black/70
          via-slate-900/70
          to-slate-950
        "
      />

      {/* Glow Effect */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-175
          h-175
          bg-indigo-500/20
          blur-[180px]
          rounded-full
        "
      />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          px-6
          max-w-7xl
          mx-auto
        "
      >
        <h1
          className="
            text-white
            font-black
            text-6xl
            md:text-8xl
            leading-tight
          "
        >
          Predict Software
          <br />
          <span
            className="
              bg-linear-to-r
              from-indigo-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Defects Before Deployment
          </span>
        </h1>

        <p
          className="
            text-gray-300
            mt-8
            text-xl
            max-w-3xl
          "
        >
          Analyze GitHub repositories using machine
          learning and identify bug-prone commits
          with Just-In-Time Bug Prediction.
        </p>

        {/* Input Box */}
        <div className="mt-12 w-full max-w-4xl">
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-2
              flex
              flex-col
              md:flex-row
              gap-2
              shadow-2xl
            "
          >
            <div
              className="
                flex-1
                flex
                items-center
                gap-3
                px-4
              "
            >
              <GitBranch className="text-white" />

              <input
                type="text"
                placeholder="Paste GitHub repository URL..."
                value={repoUrl}
                onChange={(e) =>
                  setRepoUrl(e.target.value)
                }
                className="
                  bg-transparent
                  outline-none
                  text-white
                  w-full
                  placeholder:text-gray-400
                "
              />
            </div>

            <button
              onClick={analyzeRepository}
              disabled={loading}
              className="
                bg-indigo-600
                hover:bg-indigo-700
                disabled:opacity-50
                disabled:cursor-not-allowed
                px-8
                py-4
                rounded-xl
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition-all
              "
            >
              {loading
                ? "Analyzing..."
                : "Analyze Repository"}

              {!loading && (
                <ArrowRight size={18} />
              )}
            </button>
          </div>

          <p
            className="
              text-gray-400
              mt-3
              text-left
            "
          >
            Example:
            <span
              className="
                text-indigo-400
                ml-2
              "
            >
              https://github.com/facebook/react
            </span>
          </p>
          {error && (
  <div
    className="
      mt-4
      bg-red-500/10
      border
      border-red-500
      text-red-300
      rounded-xl
      p-4
      text-left
    "
  >
    <strong>Error:</strong> {error}
  </div>
)}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}