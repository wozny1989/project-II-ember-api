/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // @belongsTo('user', { autoSave: true }) user;
    user: { model: 'user' },
    // @belongsTo('post', { autoSave: true }) post;
    post: { model: 'post' },
  },
};
