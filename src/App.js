import "./App.css";
import Crud from "./test/Crud";
import Count from "./test/Count";
import Count1 from "./test/Count1";
import Count2 from "./test/Count2";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./test/Navbar";
import Home from "./test/Home";
import Api from "./test/Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route
          path="/crud"
          element={<Crud title="CRUD REACT APP" discrip="Lalit Crud App" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/count1" element={<Count1 />} />
        <Route path="/count2" element={<Count2 />} />

        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
