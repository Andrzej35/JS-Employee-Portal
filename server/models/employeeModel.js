const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeModel = new Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    gender : {
        type: String,
        trim: true
    },
    company : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true
    },
    phoneNo : {
        type: String,
        trim: true
    },
    address : {
        type: String,
        trim: true
    },
    desc : {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('employees', employeeModel)
