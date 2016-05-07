class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }
  onClickVideo(clicked) {
    this.setState({
      currentVideo: clicked
    });
  }
  componentDidMount() {
    this.props.searchYouTube({q: 'react', max: 5, key: window.YOUTUBE_API_KEY}, (data) => {
      this.setState({
        currentVideo: data[0],
        videos: data
      });
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClickVideo1={this.onClickVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// window.searchYouTube({});