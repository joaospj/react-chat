import React, { useState, useEffect } from "react";
import "./Chat.css";
import Message from "./Message";
import { useInput } from "../hooks/useInput";
import socketIOClient from "socket.io-client";

let socket;
function Chat() {
  const [messages, setMessages] = useState([
    { msg: "Hi there!", sender: false },
    { msg: "Hi there!", sender: true }
  ]);
  const [endpoint] = useState("http://localhost:5000");

  const { value, setValue, reset } = useInput("");

  useEffect(() => {
    socket = socketIOClient(endpoint);
    socket.on("chat message", data => {
      setMessages(messages => {
        const oldMessages = [
          ...messages,
          { msg: data.msg, sender: false, author: data.author }
        ];
        return oldMessages;
      });
      console.log(data);
    });
  }, [endpoint]);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      setMessages([...messages, { msg: value, sender: true }]);
      socket.emit("chat message", value); //{ msg: value, author: "John" }
    }
    reset();
  }

  return (
    <div>
      <h1>Chat</h1>
      <div className="container">
        <div className="chat">
          {messages.map((m, i) => {
            return <Message key={i} {...m} />;
          })}
        </div>
        <div className="footer">
          <form onSubmit={handleSubmit} className="form">
            <input name="msg" type="text" onChange={setValue} value={value} />
            <div onClick={handleSubmit}>
              <i className="material-icons">send</i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
