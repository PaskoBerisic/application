// define needed actions
const express = require('express')
const app = express();
const modelRoute = express.Router();

// define Model
let Model = require('../model/model');

/* CRUD */
// getAllModel
modelRoute.route('/').get((req, res) => {
    Model.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// getModelById
modelRoute.route('/model/:id').get((req, res) => {
    Model.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// addModel
modelRoute.route('/add-model').post((req, res, next) => {
    Model.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// updateModel
modelRoute.route('/update-model/:id').put((req, res, next) => {
    Model.findByIdAndUpdate(req.params.id, {
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

// deleteModel
modelRoute.route('/delete-model/:id').delete((req, res, next) => {
    Model.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: data
            });
        }
    })
});

//export routes
module.exports = modelRoute;