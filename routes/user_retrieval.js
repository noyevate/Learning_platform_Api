const express = require("express")
const connection = require("../connection")
const router = express.Router()

var auth = require("../Authentication/authentication")

router.get('/users/:id', auth.authenticateToken, (req, res) => {
    
    const id = req.params.id;
    connection.query('SELECT * FROM user',[id], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query: ' + err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
});

module.exports = router