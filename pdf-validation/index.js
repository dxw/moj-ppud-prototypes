const path = require("path")
const pdf_extract = require('pdf-extract')

const options = {
  type: 'ocr',
  ocr_flags: ['--psm 1'],
}

module.exports = function (path, data_to_match) {
    const mod = this;
    this.path = path
    this.data_to_match = data_to_match
    this.errors = []
    this.validate = function (cb) {
        const path_to_pdf = __dirname + this.path
        const processor = pdf_extract(this.path, options, ()=>{})
        processor.on('complete', function(data) {
            const text = data.text_pages[0]
            for (item in mod.data_to_match) {
                if (!text.match(mod.data_to_match[item])) {
                    mod.errors.push(item)
                }
            }
            mod.extracted_text = text

            cb()
        })
    }
}