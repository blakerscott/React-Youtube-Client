import axios from 'axios';

const KEY = 'AIzaSyAekvqr4w_kmF3KsuWExvmh31vpytIb8sg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});