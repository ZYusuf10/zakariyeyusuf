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
router.get('/about', userAction.about);
router.get('/payMe', userAction.payMe);



/*journal*/

var controller = require('../controllers/controller');
const multer = require('multer');
const upload = multer({dest: './public/images'});

/* GET home page. */
router.get('/journal', function(req, res, next) {
  res.render('index', { title: 'journal' });
});

/* article types index page */
router.get('/javascript', controller.javaScript);

/*login to admin to Post */
router.get('/newBit', controller.newBitGet);
router.post('/newBit', controller.newBitPost);

/* new techrecord */
router.get('/newTecknical', controller.newTecknical);
router.get('/newBookReflection', controller.newBookReflection);


router.get('/Technical/:id', controller.technicalDetail);
router.post('/searchTechnical', controller.searchTechnical);

/*subscription */
router.post('/addEmailToSub', controller.addEmailToSub);
router.post('/saveBookRef', controller.saveBookRef);

/*journal books*/

router.post('/uploadFile', upload.single('image'), controller.uploadFile);
router.post('/editorData', controller.saveJSRecord);



/*bookreflections index page and details */
router.get('/bookreflections', controller.bookreflections);
router.get('/Reflection/:id', controller.reflectionDetail);
router.post('/editorDataJS', controller.saveJSRecord);

//paypal












/* 404 */
router.get('*', userAction.pageNotFound);
module.exports = router;
