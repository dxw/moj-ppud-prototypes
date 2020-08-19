const express = require('express')
const router = express.Router()
const config = require('./config')

// Add your routes here - above the module.exports line
router.use(function (req, res, next) {
    res.locals.query = req.query
    res.locals.config = config.prototypeData
    next()
})

module.exports = router
