const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use(function (req, res, next) {
    res.locals.query = req.query
    next()
})

router.get('/release', function (req, res) {
    res.redirect('/release/todo')
})


module.exports = router
