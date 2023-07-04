import "./App.css";
import Crud from "./test/Crud";
import Count from "./test/Count";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./test/Navbar";
import Home from "./test/Home";
import Api from "./test/Api";
import Forms from "./test/Forms";

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
        <Route path="/api" element={<Api />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
