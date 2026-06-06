import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Repositories from "./pages/Repositories";
import RepositoryDetails from "./pages/RepositoryDetails";
import AnalyzeCommit from "./pages/AnalyzeCommit";
import RiskReport from "./pages/RiskReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
        path="/login"
        element={<Login />}
        />

        <Route
        path="/repositories"
        element={<Repositories />}
        />

        <Route
          path="/repositories/:id"
          element={<RepositoryDetails />}
        />

        <Route
          path="/analyze-commit"
          element={<AnalyzeCommit />}
        />

        <Route
          path="/report/:id"
          element={<RiskReport />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;