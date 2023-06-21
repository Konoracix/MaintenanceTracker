/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
		.createTable('Users', (table) => {
			table.uuid('id')
			table.string('mail').unique()
			table.string('password')
			table.string('role')
		})
		.createTable('Machine', (table) => {
			table.increments('id')
			table.string('name')
			table.string('location')
			table.boolean('state')
			table.date('nsd') // next service date
		})
		.createTable('ComponentsStatus', (table) => {
			table.increments('id')
			 table.integer('machine_id').references('id').inTable('Machine')
			 table.string('name')
			 table.string('Status')
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
		.dropTable('ComponentsStatus')
		.dropTable('Machine')
		.dropTable('Users')

};

//repairs 
//reviews