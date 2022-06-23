import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../src/components/Footer';
import Gnb from '../../src/components/Gnb';
import Header from '../../src/components/Header';

import WebtoonInfo from '../../src/components/WebtoonInfo';
import EpisodeList from '../../src/components/EpisodeList';

class WebtoonHomeForClass extends Component {
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
        WebtoonHomeForClass



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

export default WebtoonHomeForClass;
