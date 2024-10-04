import React from 'react';

import CreateLogo from '../components/Links/CreateLogo';

import Nav from '../components/Nav';
import '../style/Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <CreateLogo />
                <Nav />
            </div>
        </header>

    )
}
export default Header