const connection = require('./dbcon')
exports.insertname = (req, res) => { //lambda expression
    var firstname = req.body.firstname
    var lastname = req.body.lastname


    connection.query('INSERT INTO input(firstname,lastname) VALUES (?,?)', [firstname, lastname], (error, rows, fields) => {
        if (error) console.log(error)
        else res.send(rows)

    })

}