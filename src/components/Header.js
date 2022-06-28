import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
    
    return (
        <div className='header'>
            <div className='main'>
                <a href="/" title="홈페이지 메인으로 이동" id="logo" data-hveid="8">Webtton<img src={logo} className="App-logo" alt="logo" /></a>
            </div>
            <div className='login'>
            <a href="/login" className='' target="_top" sytle={{color: "white"}}>로그인</a>
            </div>
        </div>
    );
};

export default Header;