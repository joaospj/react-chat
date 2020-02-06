const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const server = app.listen(5000, function() {
  console.log("listening on *:5000");
});

const io = require("socket.io")(server);

// io.on("connection", function(socket) {
//   socket.on("chat message", function(msg) {
//     io.emit("chat message", `${msg}`);
//   });
// });
app.get("/", function(req, res) {
  res.send("Ok");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.broadcast.emit("chat message", {
    msg: `${socket.id} entrou na sala`,
    author: "Servidor"
  });
  socket.emit("chat message", {
    msg: "Você entrou na sala",
    author: "Servidor"
  });

  socket.on("chat message", function(data) {
    socket.broadcast.emit("chat message", {
      msg: data.msg,
      author: data.author
    });
  });
});
