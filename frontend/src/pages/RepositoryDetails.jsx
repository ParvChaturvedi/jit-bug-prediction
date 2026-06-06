import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RepositoryDetails() {

  <Link to="/analyze-commit">

  <button
    className="
    mt-8
    bg-indigo-600
    text-white
    px-6
    py-3
    rounded-xl
    "
  >
    Analyze Commit
  </button>

</Link>

  const { id } = useParams();

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold">
        Repository {id}
      </h1>

      <p className="mt-4">
        Detailed analysis will appear here.
      </p>

    </div>
  );
}