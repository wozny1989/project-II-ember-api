/**
 * Ember service
 *
 * @module Ember
 */

const { forEach, map, size } = require('@sailshq/lodash');
var pluralize = require('pluralize');

module.exports = {
  linkAssociations: function (model, records) {
    if (!Array.isArray(records)) {
      records = [records];
    }
    var modelPlural = pluralize(model.identity);

    return map(records, (record) => {
      var links = {};
      forEach(model.associations, (assoc) => {
        if (assoc.type === 'collection') {
          links[assoc.alias] =
            sails.config.blueprints.prefix +
            '/' +
            modelPlural +
            '/' +
            record.id +
            '/' +
            assoc.alias;
        }
      });
      if (size(links) > 0) {
        record.links = links;
      }
      return record;
    });
  },
};
