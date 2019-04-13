const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/')
    .get(controller.getAllReservations)
    .post(controller.createReservation)
    .delete(controller.deleteAllReservations)

router
    .route('/:productID')
    .get(controller.getReservationByProductID)
    .delete(controller.deleteReservationByProductID)
    .put(controller.updateReservationByProductID)


router
    .route('/shop/designers')
    .get(controller.getAll);

router
    .route('/shop/designers')
    .get(controller.getAll);

router
    .route('/shop/designers/:productID')
    .get(controller.getProductReviews);

module.exports = router;