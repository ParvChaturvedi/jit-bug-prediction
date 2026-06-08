import { Link } from "react-router-dom";
import {
  Shield,
  FolderGit2,
  Search,
  FileText,
  Settings
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      bg-white
      border-r
      min-h-screen
      p-6
      "
    >
      <div className="flex items-center gap-3">

        <Shield
          size={34}
          className="text-indigo-600"
        />

        <h1
          className="
          text-3xl
          font-bold
          "
        >
          JITGuard
        </h1>

      </div>

      <nav className="mt-12 space-y-3">

        <Link
          to="/repositories"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          hover:bg-indigo-50
          "
        >
          <FolderGit2 size={18} />
          Repositories
        </Link>

        <Link
          to="/analyze-commit"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          hover:bg-indigo-50
          "
        >
          <Search size={18} />
          Analyze Commit
        </Link>

        <Link
          to="/reports"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          hover:bg-indigo-50
          "
        >
          <FileText size={18} />
          Reports
        </Link>

        <Link
          to="/settings"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          hover:bg-indigo-50
          "
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>
    </aside>
  );
}