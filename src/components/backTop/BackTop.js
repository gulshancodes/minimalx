import { useState, useEffect } from "react";
import { BackTopBtn } from "./BackTopStyled";

const BackTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => window.scrollY >= 500 ? setIsVisible(true) : setIsVisible(false);

    useEffect(() => {
        window.addEventListener('scroll', handleVisibility);

        return () => {
            window.removeEventListener('scroll', handleVisibility);
        };
    }, []);

    // backTop btn functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <BackTopBtn
                title="Back to top"
                className={isVisible ? 'visible' : ''}
                onClick={scrollToTop}>
                <i className="bi bi-arrow-up-short fs-1"></i>
            </BackTopBtn>
        </>
    );
};

export default BackTop;