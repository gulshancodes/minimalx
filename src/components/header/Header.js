import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">MinimalX</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="portfolio" className="nav-link">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="blog" className="nav-link">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;