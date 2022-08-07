import { useRef } from "react";
import { Hero, Section } from "../components/common/CommonStyled";
import Button from "../components/button/Button";
import FeatureCard from "../components/feature/FeatureCard";
import FeatureCardData from "../components/feature/FeatureCardData";
import SectionsHead from "../components/sectionsHead/SectionsHead";
import ServiceCard from "../components/service/ServiceCard";
import ServiceCardData from "../components/service/ServiceCardData";
import PricingCard from "../components/pricing/PricingCard";
import PricingCardData from "../components/pricing/PricingCardData";
import TestiCard from "../components/testi/TestiCard";
import Accordion from "../components/accordion/Accordion";
import AccordionData from "../components/accordion/AccordionData";

const Home = () => {

  const servicesRef = useRef();

  // hero-btn functionality
  const handleClick = () => {
    let servicesSection = servicesRef.current;
    servicesSection.scrollIntoView();
  };

  return (
    <>
      {/* ===== Hero Section ===== */}
      <Hero>
        <div className="hero_wrapper mt-5 py-5">
          <div className="container">
            <h4>Welcome to MinimalX</h4>
            <h1>We love make things amazing and simple</h1>
            <p>A digital web studio creating stunning & engaging online experiences</p>
            <Button
              btnText="Get Started"
              handleClick={handleClick}
            />
          </div>
        </div>
      </Hero>

      {/* ===== Features Section ===== */}
      <Section>
        <div className="container">
          <SectionsHead heading="Features" />

          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6">
              <h2>Why choose us ?</h2>
              <p>We do the work you stay focused on your customers. We improve your Marketing
                business and increase your Marketing Performance. We provide all the best solutions for your Business.</p>
              <ul className="ps-3 my-4" style={{ listStyleType: 'initial' }}>
                <li>We value our clients.</li>
                <li>We have Strong Expertise.</li>
                <li>We put a lot of effort in design.</li>
              </ul>
              <Button btnText="Know More" />
            </div>

            <div className="col-lg-6">
              <div className="row justify-content-lg-end gap-lg-4 gap-4 gx-0 gx-lg-4">
                {
                  FeatureCardData.map((currValue) => (
                    <FeatureCard
                      key={currValue.id}
                      {...currValue}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Services Section ===== */}
      <Section ref={servicesRef}>
        <div className="container">
          <SectionsHead heading="Services" />

          <div className="row justify-content-between gy-4 gx-0 gx-sm-4">
            {
              ServiceCardData.map((currValue) => (
                <ServiceCard
                  key={currValue.id}
                  {...currValue}
                />
              ))
            }
          </div>
        </div>
      </Section>

      {/* ===== Pricing Section ===== */}
      <Section>
        <div className="container">
          <SectionsHead heading="Pricing" />

          <div className="row gap-lg-4 gap-md-2 gap-4 gx-0 gx-sm-4">
            {
              PricingCardData.map((currValue) => (
                <PricingCard
                  key={currValue.id}
                  {...currValue}
                />
              ))
            }
          </div>
        </div>
      </Section>

      {/* ===== Testimonials Section ===== */}
      <Section>
        <div className="container">
          <SectionsHead heading="Testimonials" />
          <TestiCard />
        </div>
      </Section>

      {/* ===== FAQ Section ===== */}
      <Section>
        <div className="container">
          <SectionsHead heading="FAQ" />

          <div className="accordion" id="accordionExample">
            <div className="row">
              <div className="col-lg-6">
                {
                  AccordionData.slice(0, 3).map((currValue) => (
                    <Accordion
                      key={currValue.id}
                      {...currValue}
                    />
                  ))
                }
              </div>

              <div className="col-lg-6">
                {
                  AccordionData.slice(3, 6).map((currValue) => (
                    <Accordion
                      key={currValue.id}
                      {...currValue}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;