import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Test } from "./Test";

import { SelectWords } from "./Routes/SelectWords";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectWords />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
