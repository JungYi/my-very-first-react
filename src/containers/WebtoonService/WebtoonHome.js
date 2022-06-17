import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';

import WebtoonInfo from '../../components/WebtoonInfo';
import EpisodeList from '../../components/EpisodeList';

class WebtoonHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      webtoonId : parseInt(props.match.params.webtoonId, 10),
      webtoon : {},
      episodeList : []
    };
  }

  componentDidMount() {
    this._getWebtoon();
    this._getEpisodeList();

    
  }


  _getWebtoon() {
    const apiUrl = '/dummy/webtoon_detail.json';

    var test = this.state.webtoonId;
    console.log(test);

    
    axios.get(apiUrl)
      .then(data => {
        this.setState({
          webtoon : data.data.webtoons.find(w => (
            w.id === this.state.webtoonId
          ))
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  _getEpisodeList() {
    const apiUrl = '/dummy/episode_list.json';

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          episodeList : data.data.webtoonEpisodes.filter(episode => (
            episode.webtoonId === this.state.webtoonId
          ))
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
        WebtoonHome



        { this.state.webtoon.id ? (
          <WebtoonInfo webtoon={this.state.webtoon} />
        ) : (
          <span>Loading. . .111</span>
        )}
        
        { this.state.episodeList.length > 0 ? (
          <EpisodeList episodes={this.state.episodeList} />
        ) : (
          <span>Loading. . .222</span>
        )}





        <Footer />
      </div>
    )
  }
}

export default WebtoonHome;
