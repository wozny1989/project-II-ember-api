/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // @attr('string') username;
    username: { type: 'string', required: true },
    // @attr('string') password;
    password: { type: 'string', required: false },
    // @attr('string') email;
    email: { type: 'string', required: true },
    // @attr('string') photoURL;
    photoURL: { type: 'string', required: false },
    // @attr('boolean', { defaultValue: false }) isDeleted;
    isDeleted: { type: 'boolean', defaultsTo: false },
    // @attr('boolean', { defaultValue: false }) isAdmin;
    isAdmin: { type: 'boolean', defaultsTo: false },
    // @hasMany('post') posts;
    posts: { collection: 'post', via: 'owner' },
    // @hasMany('like') likes;
    likes: { collection: 'like', via: 'user' },
  },
};
