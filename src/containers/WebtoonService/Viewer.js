import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Viewer(props) {

  const [episodeId, setEpisodeId] = useState(parseInt(props.match.params.episodeId, 10));
  const [episode, setEpisode] = useState({}); //Object {}, 배열 []

  const apiUrl = '/dummy/episode_list.json';

  useEffect(() => {
    // axios.get(apiUrl)
    //   .then(data => {
    //     this.setState({
    //       episode : data.data.webtoonEpisodes.find(episode => (
    //         episode.id === this.state.episodeId
    //       ))
    //     })
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      for (let index = 0; index < data.webtoonEpisodes.length; index++) {
        if (episodeId === data.webtoonEpisodes[index].id) {
          setEpisode(data.webtoonEpisodes[index])
        }
      }})
    .catch((error) => {
      console.error('실패:', error);
    });
  }, []);
  
  return (
    <div className='wrap_viewer'>
      { episode.id ? (
      <div>
        <div className='top_viewer'>
          {episode.title}
          <Link to={`/webtoon/${episode.webtoonId}`} className='btn_close'>X</Link>

        </div>
        <div className='wrap_images'>
          { episode.images.map((img, index) => (
            <img key={index} src={img} />
          ))}
          
        </div>
      </div>
      ) : (
        <span>lodddding</span>
      )}

    </div>
  );
}

export default Viewer;
