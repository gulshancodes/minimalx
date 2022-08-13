import { NavLink } from "react-router-dom";
import HeaderData from "./HeaderData";

const Header = () => {

    // closing the navbar on clicking the links
    const closeNavbar = () => {
        let navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <NavLink
                        to="/"
                        className="navbar-brand"
                        onClick={closeNavbar}>
                        MinimalX
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {
                                HeaderData.map((currValue) => {
                                    const { id, link, path } = currValue;
                                    return (
                                        <li className="nav-item" key={id}>
                                            <NavLink
                                                to={path}
                                                className="nav-link"
                                                onClick={closeNavbar}>
                                                {link}
                                            </NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;