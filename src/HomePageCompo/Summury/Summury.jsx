import "./Summury.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Summury = () => {
    return (
        <div className="summuryContainer">
            <h2>CA & Design</h2>
            <p>Is an architecture and inter design firm focused on creating great places to work, play and live</p>


            <div className="mediaIcons">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
        </div>
    );
};

export default Summury;