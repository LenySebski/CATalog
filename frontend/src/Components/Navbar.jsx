import {useRef} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaWindowClose} from 'react-icons/fa';

function Navbar() {
    //The function of the button on click
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>Lost Pet</a>
                <a href='/#'>Found Pet</a>
                <a href='/#'>Pet Database</a>
                <a href='/#'>Sign in</a>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaWindowClose/>
                </button>

            </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <GiHamburgerMenu/>
                </button>
        </header>
    );

}

export default Navbar;