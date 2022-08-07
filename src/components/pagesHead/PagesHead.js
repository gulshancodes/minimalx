import { HeadTitle } from "./PagesHeadStyled";

const PagesHead = (props) => {

    const { title, subTitle } = props;

    return (
        <>
            <HeadTitle>
                <div className="container">
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </div>
            </HeadTitle>
        </>
    );
};

export default PagesHead;