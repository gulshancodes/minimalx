import { ServiceCardWrapper } from "./ServiceCardStyled";

const ServiceCard = (props) => {

    const { icon, title, description } = props;

    return (
        <>
            <ServiceCardWrapper className="col-lg-3 p-4 text-center">
                <span className="badge p-3"><i className={icon}></i></span>
                <h4>{title}</h4>
                <p>{description}</p>
            </ServiceCardWrapper>
        </>
    );
};

export default ServiceCard;