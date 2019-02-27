import axios from 'axios';

export default axios.create({
    baseURL: 'http://pathofexile.com/character-window/'
});