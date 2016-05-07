var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'JSON',
    data: {
      part: 'snippet',
      type: 'video',
      maxResults: options.max || 5,
      q: options.query,
      key: options.key
    },
    success: (data) => {
      callback(data.items);
    },
    error: (XHR, textStatus, errorThrown) => {
      console.log(`There was an ${XHR.status} and ${errorThrown}, ${textStatus}`);
    }
  });

};


window.searchYouTube = searchYouTube;
