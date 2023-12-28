import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>

            <div className="navWrapper">

                <div className="log">
                    <img src="https://i.ibb.co/mHztTCN/EduLogo.png" alt="logo" />
                </div>

                <ul className="navLinks">
                    <li><NavLink to={"/"} className={"navlink"}>HOME</NavLink></li>
                    <li><NavLink to={"/projects"} className={"navlink"}>PROJECTS</NavLink></li>
                    <li><NavLink to={"/contact"} className={"navlink"}>CONTACT</NavLink></li>
                    <li><NavLink to={"/about"} className={"navlink"}>ABOUT</NavLink></li>
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;