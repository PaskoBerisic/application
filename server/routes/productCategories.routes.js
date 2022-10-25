const express = require('express')
const app = express();
const ProductCategoryRoute = express.Router();

let ProductCategory = require('../model/ProductCategory');

/* CRUD */
// getAllProductCategory
ProductCategoryRoute.route('/').get((req, res) => {
    ProductCategory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getProductCategoryById
ProductCategoryRoute.route('/ProductCategory/:id').get((req, res) => {
    ProductCategory.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// addProductCategory
ProductCategoryRoute.route('/add-ProductCategory').post((req, res, next) => {
    ProductCategory.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// updateProductCategory
ProductCategoryRoute.route('/update-ProductCategory/:id').put((req, res, next) => {
    ProductCategory.findByIdAndUpdate(req.params.id, {
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

// deleteProductCategory
ProductCategoryRoute.route('/delete-ProductCategory/:id').delete((req, res, next) => {
    ProductCategory.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

module.exports = ProductCategoryRoute;