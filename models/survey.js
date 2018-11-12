// import modules
const mongoose = require('mongoose');

// User Schema
const SurveySchema = mongoose.Schema({
    title: String,
    researcherName: String,
    institution: String,
    summary: String,
    deadline: Date,
    rewards: String,
    surveyLink: String,
    comments: [{comment: String, username: String}],
    username: String
});


// export user schema
module.exports = mongoose.model('Survey', SurveySchema);