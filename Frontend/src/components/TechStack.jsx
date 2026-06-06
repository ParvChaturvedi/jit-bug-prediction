const tech = [
  "React",
  "FastAPI",
  "Python",
  "XGBoost",
  "SHAP",
  "GitHub API"
];

export default function TechStack() {
  return (
    <section className="py-16 text-center">

      <h3
        className="
        text-2xl
        font-semibold
        mb-10
        "
      >
        Built with cutting-edge technology
      </h3>

      <div
        className="
        flex
        justify-center
        gap-4
        flex-wrap
        "
      >

        {tech.map(item => (
          <div
            key={item}
            className="
            border
            px-6
            py-3
            rounded-full
            bg-white
            "
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}