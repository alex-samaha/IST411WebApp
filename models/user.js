// import modules
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

// add plugins
UserSchema.plugin(passportLocalMongoose);

// export user schema
module.exports = mongoose.model('User', UserSchema);