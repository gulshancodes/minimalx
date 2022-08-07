import { Link } from "react-router-dom";
import { PriceCardWrapper, PriceCardHead, PriceCardFoot } from "./PricingCardStyled";
import Button from "../button/Button";


const PricingCard = (props) => {

    const { title, price, feature } = props;

    return (
        <>
            <PriceCardWrapper className="col-md p-0">
                <PriceCardHead color="var(--dark-color)">
                    <h4>{title}</h4>
                </PriceCardHead>

                <div className="pricecard_info my-4">
                    <h3><b>${price} <small>/ month</small></b></h3>
                    <ul className="my-4">
                        {
                            feature.map((currValue, index) => {
                                return <li key={index} className="my-3">{currValue}</li>
                            })
                        }
                    </ul>
                </div>

                <PriceCardFoot color="var(--light-color)">

                    <Link to="contact">
                        <Button btnText="Buy Now" />
                    </Link>

                </PriceCardFoot>
            </PriceCardWrapper>
        </>
    )
}

export default PricingCard;