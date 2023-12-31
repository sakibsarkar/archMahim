import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPhone, FaRegPaperPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footerV1">
            <div className="footerTop">
                <div className="footerlinks">
                    <h1>Keep conntected</h1>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF />Facebook Page</a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaYoutube /> Youtbe Channel</a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaInstagram />Instagram Page</a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaTwitter />Twitter Account</a>
                </div>

                <div className="conactInfo">
                    <h1>Contact Info</h1>
                    <div>
                        <p className="contactIcon"><FaLocationDot /></p>

                        <a className="contactInfo" href="https://www.google.com/maps/place/Ghatarchar+Bus+Stand/@23.7321363,90.3281088,15.75z/data=!4m9!1m2!2m1!1sHazi+Ansar+Ali+Villa!3m5!1s0x3755bf6ae86661cb:0x775de2e45233f733!8m2!3d23.734014!4d90.3365881!16s%2Fg%2F11j09hkhhj?entry=ttu" target="_blank" rel="noreferrer">Hazi Anser Ali Vila,Gound Floor-A
                            Ghaterchar, Ati Bazar, Keranigonj
                            Basila, Mohammadpur, Dhaka.</a>
                    </div>

                    <div>
                        <p className="contactIcon"><FaPhone /></p>
                        <p className="contactInfo"><a href="tel:+8801581-581268">+8801581-581268</a><a href="tel:+8801715-306736">+8801715-306736</a></p>
                    </div>
                    <div>
                        <p className="contactIcon"><MdEmail /></p>
                        <a href="mailto:cadesign82@gmail.com" className="contactInfo">cadesign82@gmail.com</a>
                    </div>
                </div>

                <form className="contactForm">
                    <img src="https://i.ibb.co/vHs7MVK/web-under.png" alt="" />
                    <input type="text" name="name" required placeholder="Your name*" />
                    <input type="text" name="email" required placeholder="Your email*" />
                    <textarea name="message" placeholder="Your Message*" ></textarea>
                    <button><FaRegPaperPlane /> Send</button>
                </form>
            </div>

            <div className="footerBottom">
                <p>Copyrighted by <span>@cadesign</span>. All right reserved {year}</p>
            </div>
        </footer>
    );
};

export default Footer;