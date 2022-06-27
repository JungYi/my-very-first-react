import React from 'react';
import Header from '../../components/Header';
import Gnb from '../../components/Gnb';
import Footer from '../../components/Footer';
import InputWithLabel from '../../components/Auth/InputWithLabel';

function Login(props) {


  return (
    <div>
      <Header />
      <Gnb />
      <InputWithLabel label="이메일" name="userEmail" placeholder="이메일" />
      <InputWithLabel label="비밀번호" name="userPwd" placeholder="비밀번호" type="password" />
      <div>
        hi
      </div>

      <Footer />
    </div>
  );
}

export default Login;