var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");
var multer = require("multer");
var bodyParser=require("body-parser")
/*
 * GET home page.
 */
router.get('/', ctrlMain.get_register);
router.get('/register', ctrlMain.get_register);
router.post('/register',ctrlMain.post_register);
router.get('/login', ctrlMain.get_login);
router.post('/login', ctrlMain.post_login);
router.get('/home',ctrlMain.get_home);
router.post('/home',ctrlMain.post_home);
router.get('/form',ctrlMain.get_custDetails);
router.post('/form',ctrlMain.post_custDetails);
router.get('/ajaxpage',ctrlMain.get_ajaxpage);
//router.post('/ajaxpage',ctrlMain.get_ajaxpage);
//router.post('/loanApproved',ctrlMain.post_loanApproved);
//router.get('/ajaxtabpage',ctrlMain.get_ajaxtabpage);
//router.post('/ajaxtabpage',ctrlMain.post_ajaxtabpage);

module.exports = router;