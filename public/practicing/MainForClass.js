import React, { Component } from 'react';
import Footer from '../../src/components/Footer';
import Gnb from '../../src/components/Gnb';
import Header from '../../src/components/Header';
import WebtoonList from '../../src/components/WebtoonList';

import logo from '../../assets/images/logo.svg';
import axios from 'axios';



class MainForClassComponent extends Component {
  constructor(props) {
    super(props);


    const query = new URLSearchParams(props.location.search);
    const day = query.get('day');

    console.log('----------------------------');
    console.log(query);
    console.log(day);
    console.log('----------------------------d');

    //디폴트
    this.state = {
      // day : day || 'mon',
      day : '',
      webtoonList : []
    };
  }

  componentDidMount() {
    this._getList();
  }


  componentDidUpdate(prevProps) {
    let prevQuery = new URLSearchParams(prevProps.location.search);
    let prevDay = prevQuery.get('day');

    let query = new URLSearchParams(this.props.location.search);
    let day = query.get('day');

    console.log('------prevDay : '+prevDay);
    console.log('------day'+day);

    if (prevDay !== day) {
      this.setState({
        day
      })
      
    };

  }


  _getList() {
    const apiUrl = 'dummy/webtoon_list.json';

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          webtoonList : data.data.webtoonList
        });
      })
      .catch(error => {
        console.error(error);
      });
  }





  render() {
    return (
      <div>
        <Header />
        <Gnb />
        nonono


        { this.state.webtoonList.length > 0 ? (
          <WebtoonList list={
            // this.state.webtoonList.filter(webtoon => (
            //   webtoon.day === this.state.day
            // ))
            // this.state.webtoonList.filter(webtoon => (
            //   if (this.state.day !== null) {
            //       webtoon.day === this.state.day
            //   }
            // ))
            this.state.webtoonList
          } />

        ) : (
          <span>
            Loading.....
          </span>
        )}


        <Footer />




      </div>
    )
  }
}


export default MainForClassComponent;