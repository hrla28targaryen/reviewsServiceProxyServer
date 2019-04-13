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


const getAllReservations = (req,res) => {
    Product.find()
      .then((data) => res.status(200).send(data))
      .catch(err => console.log('error from get ', err));
    // res.status(200).send('hello from post');
}

const createReservation = (req, res) => {
    Product.create(req.body)
    .then(() => res.status(201).send('posted'))
    .catch(err => console.log('error from post ', err));
  // res.status(201).send('hello from post');
}

const deleteAllReservations = (req,res) => {
    Product.deleteMany({__v: 0})
    .then(() => res.status(202).send('ALL deleted'))
    .catch(err => console.log('error from delete ', err));
  // res.status(202).send('hello from delete');
}

const getReservationByProductID = (req, res) => {
    let {size, productID} = req.params
    Product.findOne().where({size, productID})
      .then(data => res.status(200).send(data))
      .catch(err => console.log('error from post ', err));
}

const deleteReservationByProductID = (req, res) => {
    Product.deleteMany(req.params)
    .then(() => res.status(202).send('deleted'))
    .catch(err => console.log('error from delete ', err));
  // res.status(202).send('hello from delete');
}

const updateReservationByProductID = (req, res) => {
    Product.findOneAndUpdate(req.params, req.body)
    .then(() => res.status(203).send('updated'))
    .catch(err => console.log('error from post ', err));
  // res.status(203).send('hello from put');
}

module.exports = {
    getAll,
    getProductReviews,
    getAllReservations,
    createReservation,
    deleteAllReservations,
    getReservationByProductID,
    deleteReservationByProductID,
    updateReservationByProductID
}