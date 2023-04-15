import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimalContext } from "./context/AnimalContext";
import { animals } from "./data/animals";
import Navbar from "./components/Navbar";
import { CatContext } from "./context/CatContext";
import { cats } from "./data/cats";
import { DogContext } from "./context/DogContext";
import { dogs } from "./data/dogs";
import HomeSwiper from "./components/HomeSwiper";
import DogSwiper from "./components/DogSwiper";
import CatSwiper from "./components/CatSwiper";

function App() {
  return (
    <AnimalContext.Provider value={{ animals }}>
      <CatContext.Provider value={{ cats }}>
        <DogContext.Provider value={{ dogs }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomeSwiper />} />
              <Route path="/cats" element={<CatSwiper />} />
              <Route path="/dogs" element={<DogSwiper />} />
            </Routes>
          </Router>
        </DogContext.Provider>
      </CatContext.Provider>
    </AnimalContext.Provider>
  );
}

export default App;
