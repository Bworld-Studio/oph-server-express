/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()

// const models = require('../stores/models') // eslint-disable-line no-unused-vars

router.get('/models', (req, res) => {
	// models.getClients(req.query.search).then( clients => {
	// 	res.json(clients)
	// })
})

module.exports = router