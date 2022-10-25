const moongose = require('mongoose');
const Schema = moongose.Schema;

let Order = new Schema({
    id: {
        type: Number
    },
    orderNumber: {
        type: Number
    },
    products: [{
        type: Schema.ObjectId
    }],
    total: {
        type: Schema.Types.Decimal128
    },
    tax: {
        type: Schema.ObjectId
    },
    totalWithTax: {
        type: Schema.Types.Decimal128
    },
    paymentType: {
        type: Schema.ObjectId
    },
    date: {
        type: Date
    },
    status: {
        type: Boolean
    }
},
{
    collection: 'orders'
})

module.exports = moongose.model('Order', Order);