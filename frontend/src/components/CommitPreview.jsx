export default function CommitPreview() {
  return (
    <section className="py-20">

      <div className="text-center">

        <h2 className="text-5xl font-bold">
          Example Commit Analysis
        </h2>

      </div>

      <div
        className="
        mt-16
        max-w-4xl
        mx-auto
        bg-white
        rounded-3xl
        border
        p-10
        "
      >

        <div className="flex justify-between">

          <div>

            <h3 className="font-semibold">
              Commit
            </h3>

            <p className="text-gray-500">
              a1b2c3d
            </p>

          </div>

          <div
            className="
            bg-red-100
            text-red-600
            px-4
            py-2
            rounded-full
            "
          >
            High Risk
          </div>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">
            Risk Score
          </h3>

          <div className="mt-2 h-4 bg-gray-200 rounded-full">

            <div
              className="
              h-4
              bg-red-500
              rounded-full
              w-[87%]
              "
            />

          </div>

          <p className="mt-2">
            87%
          </p>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">
            Top Contributors
          </h3>

          <ul className="mt-4 space-y-2">

            <li>Lines Added (LA)</li>

            <li>Entropy (ENT)</li>

            <li>Modified Files (NF)</li>

          </ul>

        </div>

      </div>

    </section>
  );
}