import { useContext, useState } from 'react';
import EmailContext from '../context/EmailContext';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
    const contactLocation = useLocation();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const { emailSent, setEmailSent } = useContext(EmailContext);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const sendEmail = async (event) => {
        event.preventDefault();
        // setEmailSent(true);
        try {
            const response = await fetch('http://localhost/mail-endpoint.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const responseText = await response.text();
            console.log(responseText);
            console.log('Response:', response.status)

            if (response.ok) {
                setEmailSent(true);
            } else {
                alert('There was an error sending your message. Please try again. Response Not Ok.');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        }
    }

    return (
        <div className='contact-form'>
            {emailSent ? (
                <div className='contact-message contact-message-sent'>
                    <p>Thanks for your message! I will be in touch shortly.</p>
                </div>
            ) : (
                <>
                <div>
                    {contactLocation.pathname === '/contact' ? (
                        <h1 className='contact-heading fs-hv2'>Contact</h1>
                        ) : (
                        <h2 className='contact-heading fs-h2'>Contact</h2>
                    )}
                </div>
                <div className='contact-message'>
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

                    <button type="submit" value="Send">Send</button>

                </form>
                </>
            )}
        </div>
    );
}

export default ContactForm;