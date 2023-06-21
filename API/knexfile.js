// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
  	connection: {
    	host : '0.0.0.0',
    	port : 5432,
    	user : process.env.POSTGRES_USER,
    	password : process.env.POSTGRES_PASSWORD,
    	database : process.env.POSTGRES_DB
  	},
		migrations: {
			directory: './db/migrations',
		}
  },

};
