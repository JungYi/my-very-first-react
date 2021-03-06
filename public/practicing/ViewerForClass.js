import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewerForClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodeId : parseInt(props.match.params.episodeId, 10),
      episode : {}
    };


  }


  componentDidMount() {
    this._getEpisodeList();
  }

  _getEpisodeList() {
    const apiUrl = '/dummy/episode_list.json';

    axios.get(apiUrl)
      .then(data => {
        this.setState({
          episode : data.data.webtoonEpisodes.find(episode => (
            episode.id === this.state.episodeId
          ))
        })
      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {

    const episode = this.state.episode;
    console.log(episode);

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
}

export default ViewerForClass;