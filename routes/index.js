var express = require('express');
var router = express.Router();
const CLIENT_ID = '1079233913624-v8h0hnrrbkalbhf5upetcluuepvt26og.apps.googleusercontent.com';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.post('/tokensignin', (req, res, next) => {
  // https://developers.google.com/identity/sign-in/web/backend-auth
  const token = req.body.idtoken;

  var GoogleAuth = require('google-auth-library');
  var auth = new GoogleAuth;
  var client = new auth.OAuth2(CLIENT_ID, '', '');
  client.verifyIdToken(token, CLIENT_ID, function(e, login) {
    var payload = login.getPayload();
    if (payload.aud === CLIENT_ID) {
      res.send(payload.sub); // user id
    }
  });
});

module.exports = router;
