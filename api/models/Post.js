/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: { type: 'string', required: true },
    body: { type: 'string', required: true },
    isDeleted: { type: 'boolean', defaultsTo: false },
    owner: { model: 'user' },
    likes: { collection: 'like', via: 'post' },
  },
};
