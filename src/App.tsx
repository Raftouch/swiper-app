import Swiper from "./components/Swiper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimalContext } from "./context/AnimalContext";
import { animals } from "./data/animals";
import Navbar from "./components/Navbar";
import CatSlider from "./components/CatSlider";
import { CatContext } from "./context/CatContext";
import { cats } from "./data/cats";

function App() {
  return (
      <AnimalContext.Provider value={{ animals }}>
      <CatContext.Provider value={{cats}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Swiper />} />
            <Route path="/cats" element={<CatSlider />} />
          </Routes>
        </Router>
      </CatContext.Provider>
      </AnimalContext.Provider>
  );
}

export default App;
