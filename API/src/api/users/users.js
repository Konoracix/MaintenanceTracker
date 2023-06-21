const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


const bcrypt = require('bcrypt');
const saltRounds = 10;



const knex = require('../../../db');

router.all('/', (req, res) => {
	res.json({
		message: '⛏️ MaintenanceTracker API ⛏️'
	});
})

router.post('/register', async (req, res) => {
	let myuuid = uuidv4();
	let password = "";
	password = await bcrypt.hash(req.body.password, saltRounds);
	const user = {
		id: myuuid,
		mail: req.body.mail,
		password: password,
		role: req.body.role
	}
	const createdUser = (await knex('Users').insert(user).returning('*'))[0];
	res.json({
		message: 'Successfully added new user',
		createdUser
	});
})

router.get('/login', async (req, res) => {
	const user = await knex('Users').where({
		mail: req.body.mail,
	});

	let message = {
		
	};

	if(user.length == 0){
		message = {message: "User not found!"}
	}
	else{
		if(await bcrypt.compare(req.body.password, user[0].password))
		message = {
			uuid: user[0].id
		}
	}
	res.json(message);
})

module.exports = router;