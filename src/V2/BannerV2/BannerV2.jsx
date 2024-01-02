import "./BannerV2.css";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

// ..

const BannerV2 = () => {


    const [reRender, setReRender] = useState(false)

    useEffect(() => {
        const id = setInterval(() => {
            setReRender(!reRender)
            clearInterval(id)
        }, 5000)
    }, [reRender])

    const parallax = useParallax({
        translateX: 100
    });




    return (
        <div className="bannerV2">
            <h3 className="typography" >ARCHITECTURE</h3>

            <div className="content" >
                <h1 data-aos="fade-up" data-aos-duration="2000">We are making the best <br />possible use of the <br />available space</h1>

                <Link ref={parallax.ref} data-aos="fade-up" data-aos-duration="2500">View More <IoIosArrowRoundForward className="arrow" /></Link>
                <div className="bannerBottom" >
                    <h2 data-aos="zoom-out-right" data-aos-easing="linear"
                        data-aos-duration="1500">
                        Why choose us
                    </h2>
                    <p data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">We work to an<br />extremely high standard<br />of <span>customer satisfaction</span></p>
                </div>
            </div>
        </div >
    );
};

export default BannerV2;