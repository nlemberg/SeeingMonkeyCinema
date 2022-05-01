const jsonfile = require("jsonfile");

const getJsonData = (file) => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = getJsonData;