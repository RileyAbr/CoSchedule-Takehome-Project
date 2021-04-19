const calculateStarRating = (starRankings) => {
    if (starRankings === undefined) {
        return 0;
    }

    let starCounts = [];
    starCounts[0] = starRankings.oneStar;
    starCounts[1] = starRankings.twoStar;
    starCounts[2] = starRankings.threeStar;
    starCounts[3] = starRankings.fourStar;
    starCounts[4] = starRankings.fiveStar;

    let rankValue =
        (starCounts[0] * 1 +
            starCounts[1] * 2 +
            starCounts[2] * 3 +
            starCounts[3] * 4 +
            starCounts[4] * 5) /
        (starCounts[0] +
            starCounts[1] +
            starCounts[2] +
            starCounts[3] +
            starCounts[4]);

    if (isNaN(rankValue)) return 0;

    return Math.round(rankValue * 10) / 10;
};

export { calculateStarRating };
