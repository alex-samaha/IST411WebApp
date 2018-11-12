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
        surveyLink: req.body.surveyLink
    }
    Survey.create(data).then(function(err, survey) {
        res.redirect('/home');
    })
}