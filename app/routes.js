const express = require('express')
const router = express.Router()
const config = require('./config')
const fileupload = require('express-fileupload')
const pdfValidation = require('../pdf-validation')

router.use(fileupload({
    useTempFiles : true,
    tempFileDir : 'tmp/'
}));


// Add your routes here - above the module.exports line
router.use(function (req, res, next) {
    res.locals.query = req.query
    res.locals.config = config.prototypeData
    next()
})

router.get('/release', function (req, res) {
    res.redirect('/release/todo')
})

router.post('/pdf-validation', function (req, res) {
    if(!req.files)
    {
        return res.send("File was not found");
    }
    fileValidation = new pdfValidation(req.files.file.tempFilePath, req.body)
    fileValidation.validate(function(){
        if (fileValidation.errors.length) {
            res.render("pdf-validation", {errors: fileValidation.errors, extractedText: fileValidation.extracted_text});
        } else {
            res.send("File upload successful");
        }
    })
})


module.exports = router
