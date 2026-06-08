const steps = [
  {
    title: "Connect Repository",
    desc: "Link your GitHub repository securely."
  },
  {
    title: "Fetch Commits / PRs",
    desc: "We fetch commits or pull requests."
  },
  {
    title: "Extract Features",
    desc: "Code metrics are extracted automatically."
  },
  {
    title: "AI Risk Prediction",
    desc: "XGBoost predicts bug risk."
  },
  {
    title: "Get Insights",
    desc: "Receive recommendations."
  }
];

export default function HowItWorks() {

  return (
    <section className="py-20">

      <div className="text-center">

        <span
          className="
          px-4
          py-2
          rounded-full
          bg-indigo-100
          text-indigo-600
          "
        >
          HOW IT WORKS
        </span>

        <h2
          className="
          mt-6
          text-5xl
          font-bold
          "
        >
          From Code to Confidence in 5 Steps
        </h2>

      </div>

      <div
        className="
        grid
        grid-cols-5
        gap-6
        mt-16
        "
      >

        {steps.map((step, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-3xl
            p-8
            border
            "
          >

            <div
              className="
              w-10
              h-10
              rounded-full
              bg-indigo-100
              flex
              items-center
              justify-center
              font-bold
              text-indigo-600
              "
            >
              {index + 1}
            </div>

            <h3
              className="
              mt-6
              text-xl
              font-semibold
              "
            >
              {step.title}
            </h3>

            <p
              className="
              mt-3
              text-gray-500
              "
            >
              {step.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}