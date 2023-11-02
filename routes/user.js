const express = require("express");
const connection = require("../connection.js");
const router = express.Router();

const jwt = require("jsonwebtoken")
require("dotenv").config();

var auth = require("../Authentication/authentication");

router.post("/signup", auth.authenticateToken, (req, res) => {
    let user = req.body;
    query = "select email,password from user where email=?"
    connection.query(query, [user.email], (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                query = "insert into user(email,password) values(?,?,)"
                connection.query(query, [user.name, user.contactNumber, user.email, user.password], (err, result) => {
                    if (!err) {
                        return res.status(200).json({
                            message: "successfully registered"
                        })
                    }
                    else {
                        return res.status(500).json(err)
                    }
                })
            }
            else {
                return res.status(400).json({
                    message: "email already exist"
                })
            }
        }
        else {
            return res.status(500).json(err)
        }
    })

})

router.post("/login", (req, res) => {
    const user = req.body;
    query = "select email, password, from user where email=?";
    connection.query(query, [user.email], (err, result) => {
        if (!err) {
            if (result <= 0 || result[0].password != user.password) {
                return res.status(401).json({
                    message: "incorrect username and password"
                })
            }
            
            else if (result[0].password === user.password) {
                const response = { email: result[0].email, role: result[0].role }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: "20000h" })
                res.status(200).json({ 
                    message: "you are logged in successfully",
                    Token: accessToken
                })
                
            }
            else {
                return res.status(401).json({
                    messge: "something went wrong, try again later"
                })
            }
        }
        else {
            return res.status(500).json(err)
        }
    })
})


module.exports = router;