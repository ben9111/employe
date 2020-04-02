const express = require('express')
const fs = require('fs')
const app = express()
const ObjectsToCsv = require('objects-to-csv')

const neatCsv = require('neat-csv');

app.listen(8080, () => {
    console.log('Server is listing on port 8080..')
})

async function loadToFile() {
    var list = [
        { user: "1", name: "test" },
        { user: "2", name: "test" },
        { user: "3", name: "test" },

    ]
    var csv = new ObjectsToCsv(list)
    await csv.toDisk('./users.csv')

}
fs.readFile('./users.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(await neatCsv(data))
})