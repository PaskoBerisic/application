const express = require('express')
const app = express();
const orderRoute = express.Router();

let Order = require('../model/order');

/* CRUD */
// getAllProduct
orderRoute.route('/').get((req, res) => {
    Order.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getProductById
orderRoute.route('/order/:id').get((req, res) => {
    Order.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// addProduct
orderRoute.route('/add-order').post((req, res, next) => {
    Order.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// updateProduct
orderRoute.route('/update-order/:id').put((req, res, next) => {
    Order.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log('Update successfull');
        }
    })
});

// deleteProduct
orderRoute.route('/delete-order/:id').delete((req, res, next) => {
    Order.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

module.exports = orderRoute;