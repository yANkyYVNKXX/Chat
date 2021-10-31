const {Schema, model, Types} = require('mongoose')


const userScheme = new Schema({
    login: {type:String, unique:true, required:true},
    password:  {type:String, required:true}
},{versionKey:false});

const User = model('User', userScheme)

const chatScheme = new Schema({
    message:{type:String},
    user:{type:Types.ObjectId, ref:'User'}
},{versionKey:false})

const Messages = model('Messages', chatScheme)


module.exports = {User, Messages}
