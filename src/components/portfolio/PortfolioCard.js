import { Link } from 'react-router-dom';
import { PortfolioItemWrapper } from './PortfolioCardStyled';

const PortfolioCard = (props) => {

    const {img, title} = props;

    return (
        <>
            <PortfolioItemWrapper className="col">
                <Link to="/">
                    <img src={img} alt={title} />
                    <span>{title}</span>
                </Link>
            </PortfolioItemWrapper>
        </>
    );
}

export default PortfolioCard;