class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {exampleVideoData[0]},
      videos: {exampleVideoData}
    }
  }
  onClickVideo(event) {
    console.log('click');
    this.setState({
      currentVideo: 'test' 
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
          <VideoList videos={this.state.videos} onClickVideo1={()=>console.log('testApp').bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
