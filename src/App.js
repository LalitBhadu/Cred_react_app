import "./App.css";
import Crud from "./test/Crud";
import Count from "./test/Count";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./test/Navbar";
import Home from "./test/Home";
import Api from "./test/Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navbar title="CRUD REACT APP" discrip="Lalit Crud App" />}
        />
        <Route path="/crud" element={<Crud />} />
        <Route path="/home" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
