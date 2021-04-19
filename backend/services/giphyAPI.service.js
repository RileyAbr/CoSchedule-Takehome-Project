const axios = require("axios");
/* eslint-disable */
const dotenv = require("dotenv").config();
/* eslint-enable */

const GIPHYAPIKEY = process.env.GIPHY_API_KEY;

exports.getGIPHYTrending = async (limit = 15) => {
    return axios
        .get(
            `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHYAPIKEY}&limit=${limit}&rating=pg-13`
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
