import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen mx-auto w-full md:w-11/12 lg:w-4/5">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;