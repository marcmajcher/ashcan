'use strict';

/* eslint-env node */

const userDb = 'users';
const Model = require('./_model');

const User = new Model(userDb);

User.signin = (data) => {
  // TK check if user exists before creating
  const userData = {
    gid: data.sub,
    email: data.email_verified ? data.email : '',
    firstname: data.given_name,
    lastname: data.family_name,
    photourl: data.picture,
    locale: data.locale,
  };

  return User.create(userData);
};

module.exports = User;
