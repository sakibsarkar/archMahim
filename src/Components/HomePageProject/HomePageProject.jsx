import "./HomePageProject.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const HomePageProject = ({ project }) => {
    const { prjectName, title, mainImg, childImg } = project

    const newArrayTitle = title.split(" <br/> ")
    return (
        <div className="home_projectContainer">



            <Parallax strength={400} bgImage={mainImg}>
                <div className="projectContent">
                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1000">{newArrayTitle[0]}<br />{newArrayTitle[1]}</h1>
                    <Link to={`/project/${project.id}`}>View More</Link>
                </div>
            </Parallax>



            <div className="childImages">
                {childImg?.map((img, index) => <div key={index} className="childImage">
                    <img src={img} />
                </div>)}
            </div>

        </div>
    );
};

export default HomePageProject;