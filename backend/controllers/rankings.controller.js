const RankingsModel = require("../models/rankings.model");

exports.insert = (req, res) => {
    RankingsModel.createRanking(req.body).then((result) => {
        res.status(201).send({ id: result._id });
    });
};

exports.list = (req, res) => {
    let limit =
        req.query.limit && req.query.limit <= 100
            ? parseInt(req.query.limit)
            : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    RankingsModel.list(limit, page).then((result) => {
        res.status(200).send(result);
    });
};

exports.getById = (req, res) => {
    RankingsModel.findById(req.params.rankingId).then((result) => {
        res.status(200).send(result);
    });
};

exports.getByGifID = (req, res) => {
    RankingsModel.findByGifID(req.params.gifID).then((result) => {
        res.status(200).send(result);
    });
};

exports.patchById = (req, res) => {
    RankingsModel.patchRanking(req.params.gifID, req.body).then(() => {
        res.status(204).send({});
    });
};

exports.removeById = (req, res) => {
    RankingsModel.removeById(req.params.gifID).then(() => {
        res.status(204).send({});
    });
};
