import "./Navbar.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [showDrawer, setShowDrawer] = useState(false);

    const drawerLinstStyle = {
        width: "calc(100vw - 60px)",
        height: " calc(100vh - 60px)",
        padding: "30px",
        opacity: "1",
        transition: "0.4s"
    }

    const handleShowDrawer = () => {
        setShowDrawer(true)
        document.body.classList.add("noScroll")
    }
    const handleHideDrawer = () => {
        setShowDrawer(false)
        document.body.classList.remove("noScroll")
    }

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

            <div className="drawer">
                <img src="https://i.ibb.co/vHs7MVK/web-under.png" alt="logo" />
                <RxHamburgerMenu onClick={handleShowDrawer} />


                <div className="drawerLinks" style={showDrawer ? drawerLinstStyle : {}}>
                    {
                        showDrawer ?
                            <div className="drawerLinksContainer">
                                <RxCross2 className="cross" onClick={handleHideDrawer} />
                                <NavLink to={"/"} className={"drawerLink"} onClick={handleHideDrawer}>HOME</NavLink>
                                <NavLink to={"/projects"} className={"drawerLink"} onClick={handleHideDrawer}>PROJECTS</NavLink>
                                <NavLink to={"/contact"} className={"drawerLink"} onClick={handleHideDrawer}>CONTACT</NavLink>
                                <NavLink to={"/about"} className={"drawerLink"} onClick={handleHideDrawer}>ABOUT</NavLink>
                            </div>
                            : ""
                    }
                </div>
            </div>

        </nav>
    );
};

export default Navbar;