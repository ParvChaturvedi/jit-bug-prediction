import RepoCard from "../components/cards/RepoCard";
import DashboardLayout from "../layouts/DashboardLayout";

const repositories = [
  {
    id: 1,
    name: "Apache Kafka",
    visibility: "Public",
    commits: 1248,
    risk: "Medium"
  },
  {
    id: 2,
    name: "Apache Spark",
    visibility: "Public",
    commits: 984,
    risk: "Low"
  },
  {
    id: 3,
    name: "JITGuard",
    visibility: "Private",
    commits: 156,
    risk: "High"
  }
];

export default function Repositories() {
  return (
    <DashboardLayout>
    <div className="min-h-screen bg-[#F8F7F4]">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <h1 className="text-5xl font-bold">
          Repositories
        </h1>

        <p className="text-gray-500 mt-3">
          Select a repository to analyze commits and pull requests.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {repositories.map(repo => (
            <RepoCard
              key={repo.id}
              repo={repo}
            />
          ))}

        </div>

      </div>

    </div>
  </DashboardLayout>
  );
}