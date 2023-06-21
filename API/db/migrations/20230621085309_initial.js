/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
		.createTable('Users', (table) => {
			table.uuid('id')
			table.string('mail')
			table.string('password')
			table.string('role')
		})
		.createTable('Machine', (table) => {
			table.increments('id')
			table.string('name')
			table.string('location')
			table.boolean('state')
			table.integer('tbs') // time between service
			table.date('nsd') // next service date
		})
		.createTable('ComponentsTemperature', (table) => {
			table.increments('id')
			 table.integer('machine_id').references('id').inTable('Machine')
			 table.string('name')
			 table.integer('temperature')
			})
		.createTable('Accidents', (table) => {
			 table.increments('id')
			 table.integer('machine_id').references('id').inTable('Machine')
			 table.string('description')
			 table.date('date')
			 table.boolean('is_solved')
			})
			.createTable('Repairs', (table) => {
				table.increments('id')
				table.integer('machine_id').references('id').inTable('Machine')
				table.date('date')
				table.string('description')
		})
		.createTable('Reviews', (table) => {
			table.increments('id')
			table.integer('machine_id').references('id').inTable('Machine')
			table.date('date')
			table.string('description')
		})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
		.dropTable('Reviews')
		.dropTable('Repairs')
		.dropTable('Accidents')
		.dropTable('ComponentsTemperature')
		.dropTable('Machine')
		.dropTable('Users')

};

//repairs 
//reviews