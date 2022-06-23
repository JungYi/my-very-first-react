import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import Header from '../../components/Header';

import WebtoonInfo from '../../components/WebtoonInfo';
import EpisodeList from '../../components/EpisodeList';

function WebtoonHome(props) {
  const [webtoonId, setWebtoonId] = useState(parseInt(props.match.params.webtoonId, 10));
  const [webtoon, setWebtoon] = useState({}); //Object {}, 배열 []
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    getWebtoon();
    getEpisodeList();
  }, []);
  
  function getWebtoon() {
    const apiUrl = '/dummy/webtoon_detail.json';

    axios.get(apiUrl)
      .then(data => {
        /** 1. setState 사용하기 */
        // this.setState({
        //   webtoon : data.data.webtoons.find(w => (
        //     w.id === this.state.webtoonId
        //   ))
        // });

        /** 2. useState 사용하기 */
        setWebtoon(
          data.data.webtoons.find(w => (
            w.id === webtoonId
          ))
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  function getEpisodeList() {
    const apiUrl = '/dummy/episode_list.json';

    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setEpisodeList(
        data.webtoonEpisodes.filter(episode => (
          episode.webtoonId === webtoonId
        ))
      )
    })
  };

  return (
    <div>
      <Header />
      <Gnb />

      { webtoon.id ? (
        <WebtoonInfo webtoon={webtoon} />
      ) : (
        <span>Loading. . .111</span>
      )}
      
      { episodeList.length > 0 ? (
        <EpisodeList episodes={episodeList} />
      ) : (
        <span>Loading. . .222</span>
      )}

      <Footer />
    </div>
  );
}

export default WebtoonHome;
