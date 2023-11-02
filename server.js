const PORT = 5050

const app = require("./index")
const http = require("http");
const server = http.createServer(app)
server.listen(PORT)
console.log("nodejs server is running @: ", PORT)