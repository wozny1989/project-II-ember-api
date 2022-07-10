/**
 * Module dependencies
 */
const actionUtil = require('./_util/actionUtil');

/**
 * Enable sideloading. Edit config/blueprints.js and add:
 *   ember: {
 *     sideload: true
 *   }
 * Defaults to false.
 *
 * @type {Boolean}
 */
var performSideload =
  sails.config.blueprints.ember && sails.config.blueprints.ember.sideload;

/**
 * Find One Record
 *
 * get /:modelIdentity/:id
 *
 * An API call to find and return a single model instance from the data adapter
 * using the specified id.
 *
 * Required:
 * @param {Integer|String} id  - the unique id of the particular instance you'd like to look up *
 *
 * Optional:
 * @param {String} callback - default jsonp callback param (i.e. the name of the js function returned)
 */

module.exports = function findOneRecord(req, res) {
  const Model = actionUtil.parseModel(req);
  var pk = actionUtil.requirePk(req);

  const parseBlueprintOptions =
    req.options.parseBlueprintOptions ||
    req._sails.config.blueprints.parseBlueprintOptions;
  const queryOptions = parseBlueprintOptions(req);

  var query = Model.findOne(pk, queryOptions.populates);
  query = actionUtil.populateEach(query, Model.associations, queryOptions);
  query.exec(function found(err, matchingRecord) {
    if (err) {
      return res.serverError(err);
    }
    if (!matchingRecord) {
      return res.notFound('No record found with the specified `id`.');
    }

    if (sails.hooks.pubsub && req.isSocket) {
      Model.subscribe(req, matchingRecord);
      actionUtil.subscribeDeep(req, matchingRecord);
    }

    res.ok(
      actionUtil.emberizeJSON(
        Model,
        matchingRecord,
        Model.associations,
        performSideload
      )
    );
  });
};
