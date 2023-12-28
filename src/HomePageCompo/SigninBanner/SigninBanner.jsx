import "./SigninBanner.css";
import { Link } from "react-router-dom";

const SigninBanner = () => {
    return (
        <div className="signinBanner">
            <h3>Signin to connect with us</h3>
            <p>Unlock the door to your creativity on our singing page. Harmonize with style, compose your space, and let your design story unfold</p>
            <Link to={"/login"}>Signin</Link>
        </div>
    );
};

export default SigninBanner;