const express = require("express");
const cors = require("cors");


const connection = require("./connection.js")
const userRoutes = require("./routes/user")
const enrollRoute = require("./routes/enrollment")
const user_retrieval_Route = require("./routes/user_retrieval")
const app = express();

app.use(cors())
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/user", userRoutes)
app.use("/enrollment", enrollRoute)
app.use("/user_retrieval", user_retrieval_Route)

module.exports = app
