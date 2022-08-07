
const Accordion = (props) => {

    const { headId, target, title, content } = props;

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={headId}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${target}`} aria-expanded="false" aria-controls={target}>
                        {title}
                    </button>
                </h2>
                <div id={target} className="accordion-collapse collapse" aria-labelledby={headId} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion;