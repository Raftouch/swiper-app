import Swiper from "./components/Swiper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimalContext } from "./context/AnimalContext";
import { animals } from "./data/animals";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import { FaBlog, FaPaw } from "react-icons/fa";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  return (
    <div className="bg-slate-50">
      <AnimalContext.Provider value={{ animals }}>
        <Router>
          <Navbar>
            <NavItem icons={<FaBlog />} children={undefined} />
            <NavItem icons={<FaPaw />}>
              <DropdownMenu />
            </NavItem>
          </Navbar>
          <Routes>
            <Route path="/" element={<Swiper />} />
          </Routes>
        </Router>
      </AnimalContext.Provider>
    </div>
  );
}

export default App;
