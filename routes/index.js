var express = require('express');
var router = express.Router();
//get controllers
var userAction = require('../controllers/userAction');

/* GET front page. */
router.get('/', userAction.front);
router.get('/front', userAction.front);

/*other static pages */
router.get('/projects', userAction.projects);
router.get('/contact', userAction.contact);
router.post('/contact', userAction.contactPost);
router.get('/about', userAction.about)
/* 404 */
router.get('*', userAction.pageNotFound);
module.exports = router;
