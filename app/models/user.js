'use strict';

/* eslint-env node */

const userDb = 'users';
const util = require('../util');
const Model = require('./_model');

const User = new Model(userDb);

User.get = gid => util.knex(userDb).where('gid', gid).first();

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

  return User.get(data.sub)
    .then((response) => {
      if (typeof response === 'undefined') {
        return User.create(userData);
      }
      return response;
    });
};

module.exports = User;
