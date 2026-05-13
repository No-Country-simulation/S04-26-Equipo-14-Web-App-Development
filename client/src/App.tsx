import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import ReviewPanel from "./pages/ReviewPanel";
import Publication from "./pages/Publication";
import Configuration from "./pages/Configuration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/review-panel" element={<ReviewPanel />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;