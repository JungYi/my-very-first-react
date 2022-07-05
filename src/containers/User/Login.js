import React, { useState } from 'react';
import Header from '../../components/Header';
import Gnb from '../../components/Gnb';
import Footer from '../../components/Footer';
import InputWithLabel from '../../components/Auth/InputWithLabel';
import Button from '../../components/Button';

function Login(props) {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const handleUserId = (e) => {
    console.log('-------------// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다');
    setUserId(e.target.value);
  }

  const handleUserPwd = (e) => {
    console.log('-------------// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다 pwd');
    setUserPwd(e.target.value);
  }


  const fn_onClickLogin = () => {
    console.log('login clicked');
  }


  return (
    <div>
      <Header />
      <Gnb />
      <InputWithLabel label="이메일" name="userEmail" placeholder="이메일" />
      <InputWithLabel label="비밀번호" name="userPwd" placeholder="비밀번호" type="password" />
      <div>
        hi
      </div>
      <div>
        <input type={'text'} name="userId" placeholder="아이디" onChange={handleUserId} />
        <input type={'password'} name="userPwd" placeholder="비밀번호" onChange={handleUserPwd} />
        <div><Button id={"hiid"} value={'로그인'} onClick={fn_onClickLogin} /></div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;