class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: [],
      query: ''
    };
  }
  handleVideoEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  fetchVideos(query) {
    var options = {
      query: query,
      key: this.props.API_KEY
    }
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videos: videos
      });
    });
  }
  handleSearch(query) {
    var searchText = query.target.value;
    _.debounce(() => {
      this.fetchVideos(searchText);
    }, 500)();
  }
  componentDidMount() {
    this.fetchVideos('cancion del mariachi');
  }
  render() {
    return (
      <div> 
        <Nav handleSearch={this.handleSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleVideoEntryClick={this.handleVideoEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// window.searchYouTube({});