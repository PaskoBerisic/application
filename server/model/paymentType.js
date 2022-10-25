const moongose = require('mongoose');
const Schema = moongose.Schema;

let PaymentType = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    shortCode: {
        type: String
    },
    fee: {
        type: Number
    },
    is_Default: {
        type: Boolean
    }
},
{
    collection: 'paymentTypes'
})

module.exports = moongose.model('PaymentType', PaymentType);