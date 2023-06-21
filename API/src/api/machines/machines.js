const express = require('express');
const router = express.Router();

const knex = require('../../../db');

router.all('/', (req, res) => {
	res.json({
		message: '⛏️ MaintenanceTracker API ⛏️'
	});
})

router.post('/addMachine', async (req, res) => {
	const machine = {
		name: req.body.name,
		location: req.body.location,
		state: req.body.state,
		nsd: req.body.nsd
	}
	const createdMachine = (await knex('Machine').insert(machine).returning('*'))[0];
	res.json({
		message: 'Successfully added new machine',
		createdMachine
	});
})

router.get('/getAllMachines', async (req, res) => {
	const machines = await knex('Machine');
	res.json(machines)
})

router.get('/getOneMachine/:name', async (req, res) => {
	const machine = await knex('Machine').where({name: req.params.name}).returning('*')
	if(machine.length == 0){
		res.json({
			message: "Machine not found!"
		}).send();
	}
	res.json(machine[0])
})

router.put('/editMachine/:id', async (req, res) => {
	const machine = await knex('Machine').where({id: req.params.id}).update(req.body).returning('*')
	res.json({
		message: "Successfully updated user",
		machine
	})
})

router.delete('/deleteMachine/:id', async (req, res) => {
		await knex('Machine').where({id: req.params.id}).del()
		res.json({
			message: `Successfully deleted machine with id: ${req.params.id}`
		})
})

module.exports = router;