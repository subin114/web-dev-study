import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import ReactQueryPage from "./page/ReactQueryPage";

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "skyblue", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          HomePage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
