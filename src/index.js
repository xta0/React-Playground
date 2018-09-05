import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyCYOlyPOZ5jzLIi0JeR26lbWAOyn7QONDs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos }); // object literal
    });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <SearchBar />
        <VideoDetail video={videos[0]} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
