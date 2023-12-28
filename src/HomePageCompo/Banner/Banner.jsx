import "./Banner.css";
import { Parallax } from "react-parallax";

const Banner = () => {
    // https://i.ibb.co/YXm0zNm/Banner.jpg
    return (
        <div className="banner">

            <Parallax strength={600} bgImage="https://i.ibb.co/YXm0zNm/Banner.jpg">
                <div className="bannerContent">
                    <button>View Work</button>
                </div>
            </Parallax>

        </div>
    );
};

export default Banner;