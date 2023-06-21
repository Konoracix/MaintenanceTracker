const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors')
const bodyParser = require('body-parser')

const api = require('./api/api');

const app = express();

app.use(morgan('tiny'));
app.use(helmet()); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.json({
		message: '⛏️ MaintenanceTracker API ⛏️'
	});
});

app.use('/api', api);

module.exports = app;