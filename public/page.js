var socket = io()

socket.on("time", (msg) =>{
    document.querySelector("#time").innerHTML = msg
})