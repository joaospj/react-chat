import React, { useState, useEffect } from "react";
import "./Chat.css";
import Message from "./Message";
import { useInput } from "../hooks/useInput";
import socketIOClient from "socket.io-client";

let socket;
function Chat({ nickname }) {
  const [messages, setMessages] = useState([]);
  const [endpoint] = useState("http://localhost:5000");

  const { value, setValue, reset } = useInput("");

  useEffect(() => {
    socket = socketIOClient(endpoint, {
      query: {
        nickname: nickname
      }
    });
    socket.on("chat message", data => {
      setMessages(messages => {
        const oldMessages = [
          ...messages,
          { msg: data.msg, sender: false, author: data.author }
        ];
        return oldMessages;
      });
    });
  }, [nickname, endpoint]);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      setMessages([...messages, { msg: value, sender: true }]);
      socket.emit("chat message", { msg: value, author: nickname }); //
    }
    reset();
  }

  return (
    <div className="container">
      <div className="chat">
        {messages.map((m, i) => {
          return <Message key={i} {...m} />;
        })}
      </div>
      <div className="footer">
        <form onSubmit={handleSubmit} className="form">
          <input
            name="msg"
            type="text"
            onChange={setValue}
            value={value}
            autoComplete="off"
            autoFocus
          />
          <div onClick={handleSubmit}>
            <i className="material-icons">send</i>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
