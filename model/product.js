const { json } = require('body-parser')
const fs = require('fs')
const path = require('path')
const products = []

module.exports = class product {
    constructor(t) {
        this.title = t
    }

    save() {
        // const p =require('../data/product.json')
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json')
        const p = path.join(__dirname,"../", 'data', 'product.json')
        fs.readFile(p, (err, fileContent) => {
            const product = []
            if (!err) {
                product = JSON.parse(fileContent)
            }
            product.push(this)
            fs.writeFile(p , JSON.stringify(product), (err) => {
                console.log(err)
            })
        })
    }
    static fetchall() {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return []
            }
            return JSON.parse(fileContent)
        })
    }
}