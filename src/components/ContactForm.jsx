const ContactForm = () => {

    const sendEmail = async (event) => {
        event.preventDefault();
        console.log('Sending email');
    }

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className='contact-form'>
            <form className='' onSubmit={sendEmail}>
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


        </div>
    )

}

export default ContactForm;