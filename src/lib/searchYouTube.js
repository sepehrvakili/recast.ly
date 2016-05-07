var searchYouTube = ({key, query, max = 5}, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'JSON',
    data: {
      part: 'snippet',
      type: 'video',
      maxResults: max,
      q: query,
      key: key
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
