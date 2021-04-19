const axios = require("axios");
/* eslint-disable */
const dotenv = require("dotenv").config();
/* eslint-enable */

const GIPHYAPIKEY = process.env.GIPHY_API_KEY;

exports.getGIPHYTrending = async (limit = 15) => {
    return axios
        .get(`https://api.giphy.com/v1/gifs/trending`, {
            params: {
                api_key: GIPHYAPIKEY,
                limit: limit,
                rating: "pg-13"
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.searchGIPHY = async (searchTerm, limit = 15) => {
    return axios
        .get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: GIPHYAPIKEY,
                q: searchTerm,
                limit: limit,
                rating: "pg-13",
                offset: 0,
                lang: "en"
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
