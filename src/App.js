import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./Components/Characters/Characters";
import CharacterPage from "./Components/CharacterPage/CharacterPage";
import Students from "./Components/HogwartsStudents/Students";
import Teachers from "./Components/Teachers/Teachers";
import Faculty from "./Components/Faculty/Faculty";
import Spells from "./Components/Spells/Spells";
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
            <Route path="/character/:id" Component={CharacterPage} />
            <Route path="/students" Component={Students} />
            <Route path="/teachers" Component={Teachers} />
            <Route path="/faculty" Component={Faculty} />
            <Route path="/spells" Component={Spells} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
