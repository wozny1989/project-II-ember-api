/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    username: { type: 'string', required: true },
    password: { type: 'string', required: false },
    email: { type: 'string', required: true },
    photoURL: { type: 'string', required: false },
    isDeleted: { type: 'boolean', defaultsTo: false },
    isAdmin: { type: 'boolean', defaultsTo: false },
    posts: { collection: 'post', via: 'owner' },
    likes: { collection: 'like', via: 'user' },
  },
};
