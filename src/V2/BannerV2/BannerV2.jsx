import "./BannerV2.css";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

// ..

const BannerV2 = () => {


    const [reRender, setReRender] = useState(false)

    useEffect(() => {
        const id = setInterval(() => {
            setReRender(!reRender)
            clearInterval(id)
        }, 5000)
    }, [reRender])

    return (
        <div className="bannerV2">
            <h3 className="typography">ARCHITECTURE</h3>

            <div className="content" key={reRender}>
                <h1 data-aos="fade-up" data-aos-duration="1000">We are making the best <br />possible use of the <br />available space</h1>

                <Link data-aos="fade-up" data-aos-duration="1500">View More <IoIosArrowRoundForward className="arrow" /></Link>
                <div className="bannerBottom" data-aos="fade-up" data-aos-duration="2300">
                    <h2>
                        Why choose us
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="3000">We work to an<br />extremely high standard<br />of <span>customer satisfaction</span></p>
                </div>
            </div>
        </div>
    );
};

export default BannerV2;