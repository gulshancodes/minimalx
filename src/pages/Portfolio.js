import { Section } from "../components/common/CommonStyled";
import PagesHead from "../components/pagesHead/PagesHead";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import PortfolioCardData from "../components/portfolio/PortfolioCardData";

const Portfolio = () => {
    return (
        <>
            <PagesHead
                title="Portfolio"
                subTitle="Look at what we've done"
            />

            <Section>
                <div className="container">
                    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
                        {
                            PortfolioCardData.map((currValue) => (
                                <PortfolioCard
                                    key={currValue.id}
                                    {...currValue}
                                />
                            ))
                        }
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Portfolio;