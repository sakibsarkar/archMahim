import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>

            <div className="navWrapper">

                <Link to={"/"} className="log">
                    <img src="https://i.ibb.co/vHs7MVK/web-under.png" alt="logo" />
                </Link>

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