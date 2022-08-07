import { Link } from "react-router-dom";
import { FooterWrapper } from "./FooterStyled";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <FooterWrapper>
                <div className="container text-center">
                    <h3><Link to="/">MinimalX</Link></h3>

                    <div className="foot-social my-4">
                        <Link to="/"><i className="bi bi-google fs-5"></i></Link>
                        <Link to="/"><i className="bi bi-facebook fs-5"></i></Link>
                        <Link to="/"><i className="bi bi-twitter fs-5"></i></Link>
                        <Link to="/"><i className="bi bi-instagram fs-5"></i></Link>
                    </div>

                    <div className="foot-menu">
                        <Link to="/">Terms</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="contact">Contact</Link>
                    </div>

                    <div className="copyright mt-3">
                        <p className="text-white-50">
                            {currentYear}
                            &nbsp;MinimalX. All Rights Reserved.
                            &nbsp;Built by |
                            &nbsp;
                            <a
                                href="https://gulshansongara.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Gulshan Songara
                            </a>
                        </p>
                    </div>
                </div>
            </FooterWrapper>
        </>
    );
};

export default Footer;