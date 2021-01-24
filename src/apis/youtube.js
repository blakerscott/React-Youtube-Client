import axios from 'axios';

const KEY = 'AIzaSyBOk2T6OwMffRvq5Zn_NYECokPtpplxEUk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});