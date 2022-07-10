/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // @attr('string') title;
    title: { type: 'string', required: true },
    // @attr('string') body;
    body: { type: 'string', required: true },
    // @attr('boolean', { defaultValue: false }) isDeleted;
    isDeleted: { type: 'boolean', defaultsTo: false },
    // @belongsTo('user', { autoSave: true }) owner;
    owner: { model: 'user' },
    // @hasMany('like') likes;
    likes: { collection: 'like', via: 'post' },
    // @attr('date', { defaultValue: () => moment() }) createdAt;
  },
};
