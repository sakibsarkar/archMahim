import Banner from "../../HomePageCompo/Banner/Banner";
import BannerV2 from "../../V2/BannerV2/BannerV2";
import HomeProjects from "../../HomePageCompo/HomeProjects/HomeProjects";
import SigninBanner from "../../HomePageCompo/SigninBanner/SigninBanner";
import Summury from "../../HomePageCompo/Summury/Summury";

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <BannerV2 />
            <Summury />
            <SigninBanner />
            <HomeProjects />
        </div>
    );
};

export default Home;