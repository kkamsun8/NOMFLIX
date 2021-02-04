import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "774e14cdba07c86f7c186f6251586054",
        language: "en-US"
    }
});

api.get("tv/popular");

export default api;

