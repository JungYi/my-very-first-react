import React, { useState, useEffect, useCallback } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';
import Button from '../../components/Button';
import WebtoonList from '../../components/WebtoonList';

import logo from '../../assets/images/logo.svg';
import axios from 'axios';


function Main(props) {
  const [day, setDay] = useState('');
  const [webtoons, setWebtoons] = useState([]);

  const apiUrl = 'dummy/webtoon_list.json';

  const [page, setPage] = useState(1);
  const [limitedItems, setlimitedItems] = useState([]);
  const [concatItems, setConcatItems] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  let [pageIdx, setPageIdx] = useState(0);


  useEffect(() => {
    console.log('@  useEffect  1 @');
    getQuery();
    getList();
  }, [day]); //day 값이 변경될 때마다 실행

  useEffect(() => {
    console.log('@  useEffect  2 @');
    // fn_getItems();
  }, [fn_getItems]);


  /** 공부하기 : useCallback, async, prevState */
  const fn_getItems = useCallback(async () => {
    console.log('........................... function fn_getItems');
    console.log('      page : ' + page);

    await axios
      .get(apiUrl+`?page=${page}`)
      .then((response) => setWebtoons(prevState => [...prevState, response.data.webtoonList]))
      .catch(function(error) {console.log('실패');});
    
    console.log('      webtoons : ');
    console.log(webtoons);

  }, []);




  /** Button 더보기1 */
  const fn_getListMore = () => {
    if (pageIdx > webtoons.length/pageSize) {
      alert('no data. pageIdx : '+pageIdx);
      return;
    }

    console.log('........................... function fn_getListMore');
    const start = pageIdx*pageSize;
    const end = start + pageSize;
    console.log('      start : ' + start);
    console.log('      end : ' + end);

    axios
      .get(apiUrl+`?page=${page}`)
      .then((response) => {
        setWebtoons([...webtoons, ...response.data.webtoonList.slice(start,end)]);
        setPageIdx(pageIdx + 1);
      })
      .catch(function(error) {console.log('실패');});
    
    console.log('      webtoons : ');
    console.log(webtoons);
  }


  /** Button 더보기2 */
  function fn_loadMore(params) {
    if (page > Math.ceil(webtoons.length/pageSize)) {
      alert('no data. page : '+page);
      return;
    }
    
    console.log('........................... function fn_loadMore');
    console.log(`hi there~~~~~~${params}~~~~~`);
    console.log('      page : ' + page);
    console.log('      webtoons : ');
    console.log(webtoons);
    console.log('      limitedItems : ');
    console.log(limitedItems);
    
    /** 1. slice로 개수 제한 */
    // showLimitedItems(webtoons, 0, pageSize);

    /** 2. concat로 배열 합치기 */
    showConcatItems(webtoons, 0, pageSize);

    console.log('      page : ' + page);
    console.log('      webtoons.length : ' + webtoons.length/pageSize);
    setPage(prevState => prevState + 1);
  }

  /** 1. slice로 개수 제한 */
  function showLimitedItems(list, start = 0, count) {
    console.log('........................... function showLimitedItems');
    console.log('      list : ');
    console.log(list);
    const end = start + page*count;
    console.log('      start : ' + start);
    console.log('      end : ' + end);

    setlimitedItems(list.slice(start, end));

    console.log('      limitedItems : ');
    console.log(limitedItems);
    console.log('      list.slice : ');
    console.log(list.slice(start, end));
    console.log('      list.length : ' + list.length);
    // return {list: list.slice(start, end), nextId: list.length < end ? null : end};
  }

  /** 2. concat로 배열 합치기 */
  function showConcatItems(list, start = 0, count) {
    console.log('........................... function showConcatItems');
    console.log('      list : ');
    console.log(list);

    start = (page-1)*count;
    const end = page*count;
    console.log('      start : ' + start);
    console.log('      end : ' + end);

    if (start > list.length) {
      console.log('============return; start > list.length');
      return;
    }

    console.log('      list.slice : ');
    console.log(list.slice(start, end));

    setConcatItems(concatItems.concat(list.slice(start, end)));
    // setConcatItems(concatItems.push(list.slice(start, end)));

    console.log('      concatItems : ');
    console.log(concatItems);
  }



  /** Hoonie의 친절한 코딩 교실 */
  const getQuery = () => {
    console.log('........................... function getQuery');
    const query = new URLSearchParams(props.location.search);
    const SearchDay = query.get('day');
    
    console.log('      query : ' + query);
    console.log('      day   : ' + SearchDay);

    if (SearchDay != "") {
      setDay(SearchDay);

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

  const getList = () => {
    console.log('........................... function getList');
    /** 1. axios로 가져오기 */
    // axios
    //   .get(apiUrl)
    //   .then((response) => setWebtoons(response.data.webtoonList))
    //   .catch(function(error) {console.log('실패');});
    
    /** 2. fetch로 가져오기 */
    // fetch(apiUrl)
    // .then((res) => res.json())
    // .then((data) => {setWebtoons(data.webtoonList);})
    /** Hoonie의 친절한 코딩 교실
      *
      * getQuery함수를 useEffect(()=>{},[])에서 실행하여 query를 가져오는걸 페이지가 오픈되어 최초 랜더링이 될때
      * 한번만 요일을 가지고 오는 것이 돌아 가도록 변경
      */
    

    //메인 화면(day 파라미터 null)일 때 전체 리스트 불러오기
    //요일 클릭시 요일별 리스트 불러오기
    if (day == '' || day == null) {
      // fetch(apiUrl)
      //   .then((res) => res.json())
      //   .then((data) => {setWebtoons(data.webtoonList)});
    } else {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {setWebtoons(data.webtoonList.filter(webtoon => (webtoon.day === day)))});
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

      <div><Button id={"hiid"} value={'더보기1'} onClick={fn_getListMore} /></div>
      <div><Button id={"hiid"} value={'더보기2'} onClick={() => fn_loadMore("hohoh")} /></div>
      {/* <div><Button id={"hiid"} value={'더보기3'} onClick={fn_getItems} /></div> */}
      <div>
        
        {limitedItems.length > 0 ? <WebtoonList list={limitedItems} /> : <h1>no limitedItems</h1>}
        {concatItems.length > 0 ? <WebtoonList list={concatItems} /> : <h1>no concatItems</h1>}
        
        {webtoons.length > 0 ?
          <WebtoonList list={webtoons} />
          :
          <>
            Main
            <img src={logo} className="App-logo" alt="logo" />
          </>
        }
      </div>

      <Footer />
    </div>
  )
}


export default Main;