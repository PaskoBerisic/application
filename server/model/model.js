// define needed actions
const moongose = require('mongoose');
const Schema = moongose.Schema;

//define model with its types and collection in which it belongs. 
//collection should be plurar noun of singular model noun
let Model = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
},
{
    collection: 'models'
})

//export model
module.exports = moongose.model('Model', Model);