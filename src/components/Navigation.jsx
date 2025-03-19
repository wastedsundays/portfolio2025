import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {

    const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);

    const [menuStatus, setMenuStatus] = useState("closed");
    const toggleMenu = () => {
        setMenuStatus(menuStatus === "closed" ? "open" : "closed");
    };

    const closeMenu = () => {
        setMenuStatus("closed");
    };

    const handleResize = () => {
        if (window.innerWidth > 800) {
            setMenuStatus("closed");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        switch (true) {
            case location.pathname === "/":
                setActiveTab(0);
                break;
            case location.pathname.includes("/work"):
                setActiveTab(1);
                break;
            case location.pathname === "/about":
                setActiveTab(2);
                break;
            case location.pathname === "/contact":
                setActiveTab(3);
                break;
            default:
                setActiveTab(null);
                break;
        }
    }, [location]);



    return (
        <>
        <div>
        <button className='hamburger-button' onClick={toggleMenu}>
                        {/* {menuStatus} */}
                        <svg className="line top-line" viewBox="0 0 30 3">
                            <rect width="30" height="3"></rect>
                        </svg>
                        <svg className="line middle-line" viewBox="0 0 30 3">
                            <rect width="30" height="3"></rect>
                        </svg>
                        <svg className="line bottom-line" viewBox="0 0 30 3">
                            <rect width="30" height="3"></rect>
                        </svg>
                    </button>
        </div>        
        
        <nav className={`${menuStatus}`}>
            <ul>
                <li className={activeTab === 0 ? 'active-menu-item' : 'menu-item'}><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li className={activeTab === 1 ? 'active-menu-item' : 'menu-item'}><Link to="/work" onClick={closeMenu}>Work</Link></li>
                <li className={activeTab === 2 ? 'active-menu-item' : 'menu-item'}><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li className={activeTab === 3 ? 'active-menu-item' : 'menu-item'}><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navigation;