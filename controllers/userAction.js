//require models
var Contact = require('../models/contact')
//display homePage
exports.front = function(req, res){
    res.render('front', {title: ''});
};
//Other stat pages
exports.projects = function(req, res){
    res.render('projects', {title: ''});
};
exports.contact = function(req, res){
    res.render('contact', {title: ''});
};

exports.about = function(req, res){
    res.render('about', {title: ''});
};
//save contact
//display login page page display
exports.contactPost = function(req, res, next){
    //process requst
    let conta = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    }).save(err => {
        if(err){
            return next(err);
            console.log(err);
        }
        res.render('contact', {title: ''});
    });
};
exports.payMe= function(req, res){
    res.render('payMe', {title: 'payMe'});
}

exports.pageNotFound = function(req, res){
    res.render('pageNotFound', {title: ''})
}

