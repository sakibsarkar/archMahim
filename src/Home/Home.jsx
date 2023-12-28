import Banner from "../HomePageCompo/Banner/Banner";
import SigninBanner from "../HomePageCompo/SigninBanner/SigninBanner";
import Summury from "../HomePageCompo/Summury/Summury";

const Home = () => {
    return (
        <div>
            <Banner />
            <Summury />
            <SigninBanner />
        </div>
    );
};

export default Home;