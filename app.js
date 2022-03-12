const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)


app.use(express.static("./public"))
function remoteTime() {
    var date = new Date()
    date = "Sono le ore " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
    io.emit("time", date)
}
setInterval(remoteTime, 1000)
server.listen(3000, () => {console.log("Server is Live!")})