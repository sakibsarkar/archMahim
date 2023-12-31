import "./HomeProjects.css";
import HomePageProject from "../../Components/HomePageProject/HomePageProject";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const HomeProjects = () => {


    const { data = [] } = useQuery({
        queryKey: ["homeProject"],
        queryFn: async () => {
            const { data: project } = await axios.get("Home.json")
            return project

        }
    })



    return (
        <div className="homeProjectContainer">
            {
                data?.map((project, idnex) => <HomePageProject key={idnex} project={project} />)
            }
        </div>
    );
};

export default HomeProjects;