import "./HomePageProject.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";

const HomePageProject = ({ project }) => {
    const { prjectName, title, mainImg, childImg } = project

    const newArrayTitle = title.split(" <br/> ")
    return (
        <div className="home_projectContainer">



            <ParallaxBanner
                layers={[
                    { image: mainImg, speed: -30 },
                ]}

            >
                <div className="projectContent">
                    <h1>{newArrayTitle[0]}<br />{newArrayTitle[1]}</h1>
                    <Link to={`/project/${project.id}`}>View More</Link>
                </div>
            </ParallaxBanner>



            <div className="childImages">
                {childImg?.map((img, index) => <div key={index} className="childImage">
                    <img src={img} />
                </div>)}
            </div>

        </div>
    );
};

export default HomePageProject;