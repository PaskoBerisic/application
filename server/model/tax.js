const moongose = require('mongoose');
const Schema = moongose.Schema;

let Tax = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    percentage: {
        type: Number
    }
},
{
    collection: 'taxes'
})

module.exports = moongose.model('Tax', Tax);