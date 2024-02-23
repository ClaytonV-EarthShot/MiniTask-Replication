import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProblemStatementPage from "./Pages/ProblemStatementPage";
import CountryBattlePage from "./Pages/CountryBattlePage";

function App() {
  return (
    <div className="App">
      <script
        src="https://kit.fontawesome.com/439df294e0.js"
        crossOrigin="anonymous"
      ></script>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route
            path="/problem-statement/:id"
            element={<ProblemStatementPage />}
          />
          <Route path="/country-battle" element={<CountryBattlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
