const AccountController = require('../controllers/account-controller');

const Router = require('express').Router;

const router = new Router();

router.post('/account', AccountController.createAccount);
router.post('/subscribers', AccountController.setSubscribers);
router.post('/posts', AccountController.setPosts);
router.get('/account/:login', AccountController.getAccountInfo);

module.exports = router;
