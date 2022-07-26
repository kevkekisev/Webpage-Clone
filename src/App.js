import Development from "./pages/Development";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </div>
  );
}

export default App;
