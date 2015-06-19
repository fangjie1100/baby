var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Express'
    });
});

router.post('/', function (req, res, next) {
    console.log(req);
    var user = {
        username: 'admin',
        password: 'admin'
    }
    if (req.body.username === user.username && req.body.password === user.password) {
        //req.session.user = user;
        return res.redirect('/');
    } else {
        req.session.error = '用户名或密码不正确';
        return res.redirect('/login');
    }
});

module.exports = router;