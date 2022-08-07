import { Section } from "../components/common/CommonStyled";
import PagesHead from "../components/pagesHead/PagesHead";

const About = () => {
    return (
        <>
            <PagesHead
                title="About"
                subTitle="We are the best agency"
            />

            <Section>
                <div className="container">
                    <div className="row justify-content-between gy-5">
                        <div className="col-md-5">
                            <h6>Dedicated Team Approach</h6>
                            <h2 className="my-3">Your Long-term Design partner that extends your business</h2>
                            <p>Strong scalable team for any of your design challenges — developing complex, reliable web & mobile applications, platforms and interfaces. You are with the team, who can solve these challenges properly.</p>
                        </div>
                        <div className="col-md-5">
                            <h6>Project Based Approach</h6>
                            <h2 className="my-3">Your Creative Digital Agency that carriers out projects on time</h2>
                            <p>We make your ideas happen — from branding & design concepts to final production & release. The creative digital agency that brings the WOW to your customers.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;