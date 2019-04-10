const Reviews = require('../../rentTheRunwayReviewsService/rentTheRunwayReviewsService/database/index.js');

const getAll = (req, res) => {
    Reviews.find()
    .sort('-reviews.date')
    .then( data => res.status(200).send(data))
    .catch( err => console.error('Error'));
};


const getProductReviews = (req, res) => {
    Reviews.find(req.params)
    .sort('-reviews.date')
    .then( data => res.status(200).send(data))
    .catch( err => console.error('Error'));
};

module.exports = {
    getAll,
    getProductReviews,
}