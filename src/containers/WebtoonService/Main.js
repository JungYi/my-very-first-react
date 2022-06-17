import React from 'react';
import { Component } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';
import WebtoonList from '../../components/WebtoonList';

import logo from '../../assets/images/logo.svg';
import axios from 'axios';

// function Main() {
//   return (
//     <div>
//       <Header />
//       <Gnb />
//       Main
//       <img src={logo} className="App-logo" alt="logo" />
//       <Footer />
//     </div>
//   );
// }



class Main extends Component {
  constructor(props) {
    super(props);


    const query = new URLSearchParams(props.location.search);
    const day = query.get('day');

    //디폴트
    this.state = {
      day : day || 'mon',
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
            this.state.webtoonList.filter(webtoon => (
              webtoon.day === this.state.day
            ))
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


export default Main;