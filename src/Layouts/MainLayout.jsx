import Footer from "../Shared/Footer/Footer";
import FooterV2 from "../Shared/FooterV2/FooterV2";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <FooterV2 />
            <Footer />
        </div>
    );
};

export default MainLayout;