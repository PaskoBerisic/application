const express = require('express')
const app = express();
const productRoute = express.Router();

let Product = require('../model/product');

/* CRUD */
// getAllProduct
productRoute.route('/').get((req, res) => {
    Product.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getProductById
productRoute.route('/product/:id').get((req, res) => {
    Product.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// addProduct
productRoute.route('/add-product').post((req, res, next) => {
    Product.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// updateProduct
productRoute.route('/update-product/:id').put((req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
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
productRoute.route('/delete-product/:id').delete((req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

module.exports = productRoute;