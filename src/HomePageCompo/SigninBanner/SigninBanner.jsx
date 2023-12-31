import "./SigninBanner.css";
import { Link } from "react-router-dom";

const SigninBanner = () => {
    return (
        <div className="signinBanner">
            <h3>Sign in to contact us</h3>
            <Link to={"/login"}>Signin</Link>
        </div>
    );
};

export default SigninBanner;