const moongose = require('mongoose');
const Schema = moongose.Schema;

let Category = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    products: {
        type: Schema.ObjectId
    }
},
{
    collection: 'categories'
})

module.exports = moongose.model('Category', Category);

