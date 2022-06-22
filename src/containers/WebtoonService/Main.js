import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';
import WebtoonList from '../../components/WebtoonList';

import logo from '../../assets/images/logo.svg';
import axios from 'axios';

function Main(props) {

  const query = new URLSearchParams(props.location.search);
  const dayy = query.get('day');

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('query : '+query);
  console.log('day : '+day);
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<<');

  const [day, setDay] = useState('mon');
  const [webtoons, setWebtoons] = useState([]);

  const apiUrl = 'dummy/webtoon_list.json';

  useEffect(() => {
    console.log('@  useEffect  @');
    
    /** 1. axios로 가져오기 */
    // axios
    //   .get(apiUrl)
    //   .then((response) => setWebtoons(response.data.webtoonList))
    //   .catch(function(error) {console.log('실패');});
    
    /** 2. fetch로 가져오기 */
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {setWebtoons(data.webtoonList)});

  }, []);

  if (webtoons.length > 0) {
    return (
      <div>
        <Header />
        <Gnb />
        <WebtoonList list={webtoons} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Gnb />
        Main
        <img src={logo} className="App-logo" alt="logo" />
        <Footer />
      </div>
    );
  }
}


export default Main;
