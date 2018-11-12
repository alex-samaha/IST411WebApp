var exports = module.exports = {};
const Survey = require('../models/survey.js');

exports.showSurveys = function(req, res) {
    Survey.find({}, function(err, surveys) {
        res.render('surveyPage', {surveys: surveys});
    });
}

exports.showSurveyCreate = function(req, res) {
    res.render('CreateSurveyUI');
}

exports.createSurvey = function(req, res) {
    const data = {
        title: req.body.surveyTitle,
        researcherName: req.body.researcherName,
        institution: req.body.institution,
        summary: req.body.surveySummary,
        deadline: req.body.deadline,
        rewards: req.body.rewards,
        surveyLink: req.body.surveyLink,
        username: req.user.username
    };

    Survey.create(data).then(function(err, survey) {
        res.redirect('/home');
    });
}

exports.showMySurveys = function(req, res) {
    Survey.find({username: req.user.username}, function(err, surveys) {
        res.render('mySurveys', {surveys: surveys});
    });
}

exports.deleteSurvey = function(req, res) {
    Survey.findOneAndDelete({title: req.params.surveyTitle}, function(err, survey) {
        res.redirect('/my-surveys');
    });
}

exports.showEditSurvey = function(req, res) {
    Survey.findOne({title: req.params.surveyTitle}, function(err, survey) {
        let date = survey.deadline;
        let dateStr = (date.getMonth() + 1) + '-' + date.getDate() + '-' +  date.getFullYear()
        res.render('mySurveyEdit', {survey: survey, date: dateStr});
    });
}

exports.editSurvey = function(req, res) {
    Survey.updateOne({title: req.params.surveyTitle}, {
        title: req.body.surveyTitle,
        researcherName: req.body.researcherName,
        institution: req.body.institution,
        summary: req.body.surveySummary,
        deadline: req.body.deadline,
        rewards: req.body.rewards,
        surveyLink: req.body.surveyLink,
        username: req.user.username
    }, function(err) {
        res.redirect('/my-surveys');
    });
};