import Banner from "../../HomePageCompo/Banner/Banner";
import HomeProjects from "../../HomePageCompo/HomeProjects/HomeProjects";
import SigninBanner from "../../HomePageCompo/SigninBanner/SigninBanner";
import Summury from "../../HomePageCompo/Summury/Summury";

const Home = () => {
    return (
        <div>
            <Banner />
            <Summury />
            <SigninBanner />
            <HomeProjects />
        </div>
    );
};

export default Home;