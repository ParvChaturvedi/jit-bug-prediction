import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-6xl font-bold text-white text-center">
            About The Project
          </h1>

          <p className="text-gray-400 text-lg text-center mt-8">
            Just-In-Time Bug Prediction uses machine learning to
            predict defect-prone software changes before deployment.
          </p>

          <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10">
            <h2 className="text-white text-3xl font-bold mb-6">
              Project Overview
            </h2>

            <p className="text-gray-400 leading-relaxed">
              This project leverages XGBoost, software repository
              metrics, and explainable AI techniques to identify
              risky commits and reduce software defects.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}