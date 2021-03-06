const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const server = app.listen(5000, function() {
  console.log("listening on *:5000");
});

const io = require("socket.io")(server);

app.get("/", function(req, res) {
  res.send("Ok");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  let nickname = socket.handshake.query.nickname;
  io.emit("chat message", {
    msg: `${nickname} entrou na sala`,
    author: "Servidor"
  });

  socket.on("chat message", function(data) {
    socket.broadcast.emit("chat message", {
      msg: data.msg,
      author: data.author || socket.id
    });
  });

  socket.on("disconnect", function() {
    io.emit("chat message", {
      msg: `${nickname} saiu da sala`,
      author: "Servidor"
    });
  });
});
