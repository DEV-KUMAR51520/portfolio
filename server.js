const { Server } = require("socket.io")

const io = new Server(3001, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {
  console.log("User connected:", socket.id)

  socket.on("msg-send", (msg) => {
    io.emit("msg-receive", msg)
  })

  socket.on("disconnect", () => {
    console.log("User disconnected")
  })
})

console.log("Socket server running on port 3001")