import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitPullRequest, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [prUrl, setPrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const analyzePullRequest = async () => {
  if (!prUrl.trim()) {
    setError("Please enter a GitHub pull request URL.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const response = await fetch(
      "https://jit-bug-prediction-1.onrender.com/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pr_url: prUrl,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to analyze pull request."
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
      {/* Premium Background */}
<div className="absolute inset-0 bg-[#04070F]" />

{/* Animated Gradient Blobs */}
<div className="absolute -top-40 left-10 w-[650px] h-[650px] rounded-full bg-indigo-600/20 blur-[180px] animate-pulse" />

<div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[170px] animate-pulse" />

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[220px]" />

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />

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
    text-7xl
    md:text-9xl
    font-black
    leading-none
    tracking-tight
    text-white
  "
>
  Predict Software

  <br />

  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

    Defects Before

  </span>

  <br />

  Deployment

</h1>
        <p
  className="
    mt-8
    text-slate-300
    text-xl
    md:text-2xl
    max-w-3xl
    leading-relaxed
  "
>
  Analyze GitHub Pull Requests using
  <span className="text-indigo-300 font-semibold">
    {" "}
    Explainable AI
  </span>
  {" "}
  and detect bug-prone changes before they reach production.
</p>

        {/* Input Box */}
        <div className="mt-12 w-full max-w-4xl">
          <div
            className="
              bg-white/10
    backdrop-blur-2xl
border-white/20
shadow-[0_20px_80px_rgba(99,102,241,0.15)]
rounded-[30px]
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
              <GitPullRequest className="text-white" />

              <input
                type="text"
                placeholder="Paste GitHub Pull Request URL..."
                value={prUrl}
                onChange={(e) =>
                  setPrUrl(e.target.value)
                }
                className="
w-full
bg-transparent
text-lg
text-white
placeholder:text-slate-400
outline-none
"
              />
            </div>

            <button
              onClick={analyzePullRequest}
              disabled={loading}
              className="
bg-gradient-to-r
from-indigo-600
to-purple-600
hover:scale-105
hover:shadow-2xl
hover:shadow-indigo-500/30
transition-all
duration-300
px-10
py-5
rounded-2xl
font-semibold
text-lg
flex
items-center
gap-2
"
            >
              {loading
                ? "Analyzing..."
                : "Analyze Pull Request"}

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
              https://github.com/facebook/react/pull/1234
            </span>
          </p>
          {error && (
  <div
    className="
      mt-4
      bg-red-500/10
backdrop-blur-xl
border-red-400/30
rounded-2xl
shadow-lg
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

      </div>
    </section>
  );
}
