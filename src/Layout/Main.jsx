import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>

      
      <Footer />
    </div>
  );
};

export default Main;
