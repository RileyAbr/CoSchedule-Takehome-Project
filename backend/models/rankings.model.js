const mongoose = require("../services/mongodb.service").mongoose;
const isAlphanumeric = require("validator").isAlphanumeric;

const Schema = mongoose.Schema;

const ranksSchema = new Schema({
    oneStar: Number,
    twoStar: Number,
    threeStar: Number,
    fourStar: Number,
    fiveStar: Number
});

const commentSchema = new Schema({
    author: {
        type: String,
        trim: true
    },
    body: {
        type: String
    }
});

const rankingSchema = new Schema(
    {
        gifID: {
            type: String,
            trim: true,
            required: true,
            validate: [isAlphanumeric, "Only letters and numbers are permitted"]
        },
        rankings: ranksSchema,
        comments: [commentSchema]
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

rankingSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
rankingSchema.set("toJSON", {
    virtuals: true
});

rankingSchema.findById = function (cb) {
    return this.model("Rankings").find({ id: this.id }, cb);
};

const Ranking = mongoose.model("Rankings", rankingSchema);

exports.findById = (id) => {
    return Ranking.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.findByGifID = (gifID) => {
    return Ranking.find({ gifID: gifID });
};

exports.createRanking = (rankingData) => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    return Ranking.findOneAndUpdate(
        {
            gifID: rankingData.gifID
        },
        rankingData,
        options
    );
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Ranking.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, rankings) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rankings);
                }
            });
    });
};

exports.patchRanking = (gifID, rankingData) => {
    return Ranking.findOneAndUpdate(
        {
            gifID: gifID
        },
        rankingData
    );
};

exports.removeById = (gifID) => {
    return new Promise((resolve, reject) => {
        Ranking.deleteMany({ gifID: gifID }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
