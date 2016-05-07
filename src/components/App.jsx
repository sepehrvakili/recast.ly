class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      query: ''
    };
  }
  onClickVideo(video) {
    console.log(video);
    this.setState({
      currentVideo: video
    });
  }
  fetchData(query) {
    this.props.searchYouTube({query: query, max: 5, key: window.YOUTUBE_API_KEY}, (data) => {
      this.setState({
        currentVideo: data[0],
        videos: data
      });
    });
  }
  handleSearch(query) {
    var searchText = query.target.value;
    _.debounce(() => {
      this.fetchData(searchText);
    }, 500)();
  }
  componentDidMount() {
    this.fetchData('javascript');
  }
  render() {
    return (
      <div> 
        <Nav handleSearch={this.handleSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClickVideo={this.onClickVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// window.searchYouTube({});