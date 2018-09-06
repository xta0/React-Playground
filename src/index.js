import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyCYOlyPOZ5jzLIi0JeR26lbWAOyn7QONDs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('Udacity');
  }

  videoSearch(term) {
    YTSearch({ key: YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({
        videos, // object literal
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const { selectedVideo, videos } = this.state;
    const videoSearchDelay = _.debounce((term) => {
      this.videoSearch(term);
    }, 800);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchDelay} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          videos={videos}
          onVideoSelected={selected => this.setState({ selectedVideo: selected })
          }
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
