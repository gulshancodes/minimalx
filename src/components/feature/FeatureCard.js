
const FeatureCard = (props) => {

    const { icon, title } = props;

    return (
        <>
            <div className="col-sm-5 py-4 text-center border border-dark">
                <span className="badge p-3">
                    <i className={icon}></i>
                </span>
                <h5 className="mt-3">{title}</h5>
            </div>
        </>
    );
};

export default FeatureCard;