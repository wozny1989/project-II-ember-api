module.exports.routes = {
  'GET /users': { controller: 'User', action: 'find' },
  'GET /users/:id': { controller: 'User', action: 'findOne' },
  'POST /users': { controller: 'User', action: 'create' },
  'PUT /users': { controller: 'User', action: 'update' },
  'DELETE /users/:id': { controller: 'User', action: 'destroy' },

  'GET /posts': { controller: 'Post', action: 'find' },
  'GET /posts/:id': { controller: 'Post', action: 'findOne' },
  'POST /posts': { controller: 'Post', action: 'create' },
  'PUT /posts': { controller: 'Post', action: 'update' },
  'DELETE /posts/:id': { controller: 'Post', action: 'destroy' },

  'GET /likes': { controller: 'Like', action: 'find' },
  'GET /likes/:id': { controller: 'Like', action: 'findOne' },
  'POST /likes': { controller: 'Like', action: 'create' },
  'PUT /likes': { controller: 'Like', action: 'update' },
  'DELETE /likes/:id': { controller: 'Like', action: 'destroy' },
};
