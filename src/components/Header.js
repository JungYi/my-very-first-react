import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <a href="/" title="홈페이지 메인으로 이동" id="logo" data-hveid="8">Webtton<img src={logo} className="App-logo" alt="logo" /></a>
        </div>
    );
};

export default Header;