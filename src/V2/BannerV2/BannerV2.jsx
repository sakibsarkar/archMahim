import "./BannerV2.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

// ..

const BannerV2 = () => {

    return (
        <div className="bannerV2">
            <div className="content">
                <h1 data-aos="fade-up">ARCHITECTURE</h1>
                <h2 data-aos="fade-up"
                    data-aos-duration="2000">+ Interior</h2>

                <Link data-aos="fade-right">View More <IoIosArrowRoundForward className="arrow" /></Link>
            </div>
        </div>
    );
};

export default BannerV2;