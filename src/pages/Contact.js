import { useState } from "react";
import { Section } from "../components/common/CommonStyled";
import PagesHead from "../components/pagesHead/PagesHead";
import Button from "../components/button/Button";

const Contact = () => {

    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputValue({
            ...inputValue,
            [name]: value
        });

    };

    // on Form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Thankyou ${inputValue.username.toUpperCase()}, your form is submitted successfully`);

        setInputValue({
            username: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    
    return (
        <>
            <PagesHead
                title="Contact"
                subTitle="Let's talk about your project"
            />

            <Section>
                <div className="container">
                    <div className="row justify-content-around align-items-center gy-5">

                        {/* Contact-info */}
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center gap-4">
                                <span className="badge p-3">
                                    <i className="bi bi-telephone fs-5"></i>
                                </span>
                                <div className="contact_info">
                                    <h5>Call:</h5>
                                    <p>+1 5524 5588 55</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-4 my-3">
                                <span className="badge p-3">
                                    <i className="bi bi-envelope fs-5"></i>
                                </span>
                                <div className="contact_info">
                                    <h5>Email:</h5>
                                    <p>info@minimalx.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <span className="badge p-3">
                                    <i className="bi bi-hourglass-split fs-5"></i>
                                </span>
                                <div className="contact_info">
                                    <h5>Working Hours:</h5>
                                    <p>9:00AM To 6:00PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact-form */}
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        className="form-control"
                                        name="username"
                                        value={inputValue.username}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email*"
                                        className="form-control"
                                        name="email"
                                        value={inputValue.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="my-3">
                                    <input
                                        type="text"
                                        placeholder="Subject..."
                                        className="form-control"
                                        name="subject"
                                        value={inputValue.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        rows="3"
                                        placeholder="Message*"
                                        className="form-control"
                                        name="message"
                                        value={inputValue.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button btnText="Send Message" />
                            </form>
                        </div>

                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;