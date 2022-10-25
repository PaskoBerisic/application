const express = require('express')
const app = express();
const generalRoute = express.Router();

let Tax = require('../model/tax');
let PaymentType = require('../model/paymentType');

/* CRUD */
// getAllTaxes
generalRoute.route('/').get((req, res) => {
    Tax.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getTaxById
generalRoute.route('/tax/:id').get((req, res) => {
    Tax.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// addTax
generalRoute.route('/add-tax').post((req, res, next) => {
    Tax.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// updateTax
generalRoute.route('/update-tax/:id').put((req, res, next) => {
    Tax.findByIdAndUpdate(req.params.id, {
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

// deleteTax
generalRoute.route('/delete-tax/:id').delete((req, res, next) => {
    Tax.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

// getAllPaymentType
generalRoute.route('/').get((req, res) => {
    PaymentType.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getPaymentTypeById
generalRoute.route('/tax/:id').get((req, res) => {
    PaymentType.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// addPaymentType
generalRoute.route('/add-payment-type').post((req, res, next) => {
    PaymentType.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// updatePaymentType
generalRoute.route('/update-payment-type/:id').put((req, res, next) => {
    PaymentType.findByIdAndUpdate(req.params.id, {
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

// deletePaymentType
generalRoute.route('/delete-payment-type/:id').delete((req, res, next) => {
    PaymentType.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

module.exports = generalRoute;