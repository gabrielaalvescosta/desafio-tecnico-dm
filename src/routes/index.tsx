import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Footer from "../components/Footer/Footer";
import CarModels from "../pages/CarModels/CarModels";

const MainRoutes = () => {
    return (
      <>
        <Router>
        <Menu/>   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<CarModels />} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  };
  
  export default MainRoutes;
  