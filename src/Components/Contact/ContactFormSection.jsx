import React, { useState } from "react";

const ContactFormSection = () => {
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [NameError, setNameError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;

        setEmailError("");
        setNameError("");

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Please write a valid email');
            isValid = false;
        }

        if (!Name) {
            setNameError('Name is required');
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true);
        try {
            console.log("Logging in with:", { email, Name });
            setTimeout(() => {
                setLoading(false);
                alert('Message sent successfully');
            }, 1000);
        } catch (error) {
            setLoading(false);
            alert('Failed to send message');
        }
    };

    return (
        <div className="ContactFormSection">
            <div className="container">
                <div className="ServicesCardsTitle">
                    <h1 className="">
                        Send a message
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0723376182227!2d31.341771624937994!3d30.063460917670383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f0012866b8d%3A0xaf7d419a69b439c0!2sMind%20for%20Information%20Technology%20%26%20Media!5e0!3m2!1sar!2seg!4v1730709178750!5m2!1sar!2seg" 
                            width="100%" 
                            height="450"  
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                            
                        </iframe>
                    </div>
                    
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="mb-3 FormCol">
                                <label htmlFor="Name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${NameError ? 'is-invalid' : ''}`}
                                    id="Name"
                                    placeholder={'full name'}
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {NameError && <span className="text-danger p-2">{NameError}</span>}
                            </div>

                            <div className="mb-3 FormCol">
                                <label htmlFor="email" className="form-label">{'Email'}</label>
                                <input
                                    type="text"
                                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                    id="email"
                                    placeholder={'email@example.com'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <span className="text-danger p-2">{emailError}</span>}
                            </div>

                            <div className="mb-3 FormCol">
                                <label htmlFor="Message" className="form-label">{'Message'}</label>
                                <textarea
                                    className="form-control ContactMessage"
                                    id="Message"
                                    placeholder={'write your message'}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            <div className="FormCol LoginBtnsContainer ContactBtnContainer">
                                <button className="btn btn-danger ReadMoreBtn" >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
