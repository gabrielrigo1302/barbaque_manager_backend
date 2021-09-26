const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration, configuration.development);

module.exports = connection;
