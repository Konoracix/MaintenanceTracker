const express = require('express');
const router = express.Router();

const users = require('./users/users')
const machines = require('./machines/machines')

router.get('/', (req, res) => {
	res.json({
		message: '⛏️ MaintenanceTracker API ⛏️'
	});
})

router.use('/users', users)
router.use('/machines', machines)

module.exports = router;