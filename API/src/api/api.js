const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
	res.json({
		message: '⛏️ MaintenanceTracker API ⛏️'
	});
})

module.exports = router;