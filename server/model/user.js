const moongose = require('mongoose');
const Schema = moongose.Schema;

let User = new Schema({
    id: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    role_id: {
        type: Number
    }
},
{
    collection: 'users'
})

module.exports = moongose.model('User', User);