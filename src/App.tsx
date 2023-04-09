import Swiper from "./components/Swiper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimalContext } from "./context/AnimalContext";
import { animals } from "./data/animals";

function App() {
  return (
    <AnimalContext.Provider value={{ animals }}>
      <Router>
        <Routes>
          <Route path="/" element={<Swiper />} />
        </Routes>
      </Router>
    </AnimalContext.Provider>
  );
}

export default App;
