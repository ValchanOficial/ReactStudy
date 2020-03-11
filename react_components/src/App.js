import React, { Component } from 'react';
import './App.css'
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';
import { VideoService } from './services/VideoService';
import { Channel } from './services/EventService';
import VideoInline from './components/VideoInline';

class App extends Component {
  constructor(props){
    super(props);

    this.inlineVideo = React.createRef();
    this.cinemaVideo = React.createRef();

    this.selectVideo = this.selectVideo.bind(this);
    
    this.state = {
      videos: [],
      selectedVideo: {},
      videoContainerElement: this.inlineVideo
    }
    this.toggleCinema = this.toggleCinema.bind(this);
  }

  async componentDidMount() {
    const videos = await VideoService.list();
    this.setState({videos});
    Channel.on('video:select', this.selectVideo);
    Channel.on('video:toggle-cinema', this.toggleCinema);
  }

  componentWillUnmount() {
    Channel.removeListener('video:select', this.selectVideo);
    Channel.removeListener('video:toggle-cinema', this.toggleCinema);
  }

  toggleCinema() {
    const currentElement = this.state.videoContainerElement;
    const newContainer = currentElement === this.inlineVideo ? this.cinemaVideo : this.inlineVideo;
    this.setState({videoContainerElement: newContainer})
  }

  selectVideo(video) {
    this.setState({selectedVideo: video});
  }

  render() {
    const { videoContainerElement, selectedVideo, videos } = this.state;

    return (
      <div>
        <VideoPlayer video={selectedVideo} container={videoContainerElement.current}/>
        <VideoInline>
          <div ref={this.inlineVideo}></div>
        </VideoInline>
        <VideoList videos={videos}/>
        <VideoCinema isActive={videoContainerElement === this.cinemaVideo}>
          <div ref={this.cinemaVideo}></div>
        </VideoCinema>
      </div>
    );
  }
}

export default App;
