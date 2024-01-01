import Cursor from "../Components/Cursor/Cursor";
import Footer from "../Shared/Footer/Footer";
import FooterV2 from "../V2/FooterV2/FooterV2";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollMeter from "../Components/ScrollMeter/ScrollMeter";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

            <Cursor />
            <Navbar />
            <ScrollMeter />
            <Outlet />
            <FooterV2 />
            <Footer />
        </div>
    );
};

export default MainLayout;