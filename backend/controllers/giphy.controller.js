const GIPHYAPI = require("../services/giphyAPI.service");

exports.trending = async (req, res) => {
    let limit =
        req.query.limit && req.query.limit <= 100
            ? parseInt(req.query.limit)
            : 15;

    await GIPHYAPI.getGIPHYTrending(limit).then((result) => {
        return res.status(200).send(result);
    });
};
