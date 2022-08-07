
const SectionsHead = (props) => {
    return (
        <>
            <div className="row" style={{ marginBottom: '4rem' }}>
                <div className="col-12 text-center">
                    <h2>{props.heading}</h2>
                </div>
            </div>
        </>
    );
};

export default SectionsHead;