import "./SigninBanner.css";
import { Link } from "react-router-dom";

const SigninBanner = () => {
    return (
        <div className="signinBanner" data-aos="fade-up"
            data-aos-duration="1000">
            <h3>Sign in to contact us</h3>
            <Link to={"/login"}>Signin</Link>
        </div>
    );
};

export default SigninBanner;