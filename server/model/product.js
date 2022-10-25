const moongose = require('mongoose');
const Schema = moongose.Schema;

let Product = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: Schema.ObjectId
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
},
{
    collection: 'products'
})

module.exports = moongose.model('Product', Product);


