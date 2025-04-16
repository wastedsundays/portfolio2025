import EmailContext from '../context/EmailContext';
import { useContext } from 'react';
import IconLinkedin from '../assets/IconLinkedin';
import IconGit from '../assets/IconGit';




const Footer = () => {
    const { emailSent } = useContext(EmailContext)

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year} Adam H.</p>
            {!emailSent && (

                <div className='footer-icons'>                
                <IconLinkedin />
                <IconGit />
                </div>
                )}


        </footer>
    );
}   

export default Footer;