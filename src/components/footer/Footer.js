import { Link } from "react-router-dom";
import { FootSocialData, FootMenuData } from './FooterData';
import { FooterWrapper } from "./FooterStyled";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <FooterWrapper>
                <div className="container text-center">
                    <h3><Link to="/">MinimalX</Link></h3>

                    <div className="foot-social my-4">
                        {
                            FootSocialData.map((currValue) => {
                                const { id, path, className } = currValue;
                                return (
                                    <Link to={path} key={id}><i className={className}></i></Link>
                                );
                            })
                        }
                    </div>

                    <div className="foot-menu">
                        {
                            FootMenuData.map((currValue) => {
                                const { id, link, path } = currValue;
                                return (
                                    <Link to={path} key={id}>{link}</Link>
                                );
                            })
                        }
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