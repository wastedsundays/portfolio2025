import { useContext, useState } from 'react';
import EmailContext from '../context/EmailContext';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const { emailSent, setEmailSent } = useContext(EmailContext);


    const sendEmail = async (event) => {
        event.preventDefault();
        setEmailSent(true);
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className='contact-form'>
            {emailSent ? (
                <p>Thanks for your message! I will be in touch shortly.</p>
            ) : (
                <>
                <div>
                    {/* {contactLocation.pathname === '/contact' ? (
                        <h1 className='fs-hv2'>Contact</h1>
                        ) : (
                        <h2 className='fs-h2'>Contact</h2>
                    )} */}
                    <p>I&apos;d love to hear from you! Whether you have a question about what I do (or about your current website), a collaboration opportunity,  or you just want to say hi, feel free to reach out.</p>
                </div>
                <form className='depth-4' onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="user_name">Name</label>
                        <input type="text" id="user_name" name="user_name" aria-required="true" required onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="user_email">Email</label>
                        <input type="email" id="user_email" name="user_email" aria-required="true" required onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" aria-required="true" required onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
                </>
            )}
        </div>
    );
}

export default ContactForm;