import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';
import WebtoonList from '../../components/WebtoonList';

import logo from '../../assets/images/logo.svg';
import axios from 'axios';

function Main(props) {
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
    .then((data) => {setWebtoons(data.webtoonList); getQuery();})
    /** Hoonie의 친절한 코딩 교실
      *
      * getQuery함수를 useEffect(()=>{},[])에서 실행하여 query를 가져오는걸 페이지가 오픈되어 최초 랜더링이 될때
      * 한번만 요일을 가지고 오는 것이 돌아 가도록 변경
      */
  }, []);

  /** Hoonie의 친절한 코딩 교실 */
  const getQuery = () => {
    const query = new URLSearchParams(props.location.search);
    const SearchDay = query.get('day');
    
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('query : ' + query);
    console.log('day   : ' + SearchDay);
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<');
    if (SearchDay != "") {
      setDay(SearchDay)

      /** Hoonie의 친절한 코딩 교실
        *
        * 가지고온 요일을 state day에 저장하여 Gnb로 넘겨준다
        * SearchDay가 "" 인상태는 화면이 처음 열렷을때는 gnb를 클릭하지 않아 URLSearchParams에
        * 아무것도 없는 상태인  path="/" 이여서 아무것도 없을떄는 우선 state day의 초기값인
        * mon 이가 덮어 씌워 지는것을 막기 위하여 공백체크
        * gnb를 클릭하여 화면이 다시 그려질떄는 /?day=tue 이런식으로  URLSearchParams에 값이 담겨저 와서 
        * 정상 작동
        * 아마 이것도 state day의 초기값을 지금은 mon으로 하고 있지만
        * 추후에 Date를 사용해서 페이지가 열린 날에 해당하는 요일을 집어 넣는 로직으로 할꺼라 보여짐
        */
    }
  }

  /** Hoonie의 친절한 코딩 교실
    *
    * return도 간결화 함
    */
  return (
    <div>
      <Header />
      <Gnb day={day}/>
      {webtoons.length > 0 ?
        <WebtoonList list={webtoons} />
        :
        <>
          Main
          <img src={logo} className="App-logo" alt="logo" />
        </>
      }
      <Footer />
    </div>
  )
}


export default Main;