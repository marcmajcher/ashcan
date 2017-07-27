'use strict';

/* eslint-env node */

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const GoogleAuth = require('google-auth-library');
const CLIENT_ID = '1079233913624-v8h0hnrrbkalbhf5upetcluuepvt26og.apps.googleusercontent.com';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/gsignin', (req, res) => {
  // https://developers.google.com/identity/sign-in/web/backend-auth
  const token = req.body.idtoken;

  const auth = new GoogleAuth();
  const client = new auth.OAuth2(CLIENT_ID, '', '');
  client.verifyIdToken(token, CLIENT_ID, (e, login) => {
    const payload = login.getPayload();
    if (payload.aud === CLIENT_ID) {
      User.signin(payload)
        .then((response) => {
          // TK set session

          delete response[0].id;
          res.send(response[0]);
        })
        .catch((error) => {
          console.error(error); // eslint-disable-line no-console
        });
    }
  });
});

module.exports = router;
