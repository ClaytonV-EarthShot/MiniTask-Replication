import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Third from "./Pages/Third";

function App() {
  return (
    <div className="App">
      <script
        src="https://kit.fontawesome.com/439df294e0.js"
        crossOrigin="anonymous"
      ></script>
      <BrowserRouter>
        <Routes>
          <Route index element={<Third />} />
          {/* <Route path='/first' element={<First />}/>
          <Route path='/second' element={<Second />}/> */}
          <Route path="/third" element={<Third />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
