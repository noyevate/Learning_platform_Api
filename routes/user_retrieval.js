const express = require("express")
const connection = require("../connection")
const router = express.Router()

var auth = require("../Authentication/authentication")

router.get('/user/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    query = "select name, course ,email from enrollment where learning_platformId=? "
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query: ' + err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
});

module.exports = router