// define needed actions
const express = require('express');
const path = require('path');
const moongose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');


// connectToDB
moongose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to Mongo!', err.reason)
    })

//define routes
const modelRoute = require('./routes/models.routes');
const usersRoute = require('./routes/users.routes');
const productsRoute = require('./routes/products.routes');
const productCategoriesRoute = require('./routes/productCategories.routes');
const generalRoute = require('./routes/general.routes');
const ordersRoute = require('./routes/orders.route');

//define app
const app = express();
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

app.use(cors())
// Static directory path
app.use(express.static(path.join(__dirname, 'dist/application')))

// API root
app.use('/api/models', modelRoute);
app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);
app.use('/api/productCategories', productCategoriesRoute);
app.use('/api/general', generalRoute);
app.use('/api/orders', ordersRoute);

// PORT
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('Listening on port ' + port);
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404))
})

// Base Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/application/client/index.html'), )
})

// Error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message);
})