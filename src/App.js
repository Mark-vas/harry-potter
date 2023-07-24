import "./App.css";
import Characters from "./Components/Characters/Characters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Headers/Header";
import Navbar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Characters} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
