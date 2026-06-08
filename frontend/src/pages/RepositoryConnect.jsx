import { Github } from "lucide-react";

export default function RepositoryConnect() {
  return (
    <section className="py-20">

      <div
        className="
        bg-white
        rounded-3xl
        p-12
        border
        max-w-5xl
        mx-auto
        "
      >

        <h2 className="text-4xl font-bold">
          Connect Your Repository
        </h2>

        <p className="mt-4 text-gray-500">
          Analyze commits directly from GitHub.
        </p>

        <div className="mt-8 flex gap-4">

          <input
            placeholder="https://github.com/user/repository"
            className="
            flex-1
            border
            rounded-xl
            px-5
            py-4
            "
          />

          <button
            className="
            bg-black
            text-white
            px-6
            rounded-xl
            flex
            items-center
            gap-2
            "
          >
            <Github />
            Connect
          </button>

        </div>

      </div>

    </section>
  );
}