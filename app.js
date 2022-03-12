const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
const PORT = process.env.PORT || 5000


app.use(express.static("./public"))
function remoteTime() {
    var date = new Date()
    date = "Sono le ore " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
    io.emit("time", date)
}
setInterval(remoteTime, 1000)
server.listen(PORT, () => {console.log("Server is Live!")})