import React, { useState } from "react";
import "./Chat.css";
import Message from "./Message";

function Chat() {
  const [messages, setMessages] = useState([
    { msg: "Hi there!", sender: false },
    { msg: "Hi there!", sender: true }
  ]);

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
          <div className="form">
            <input type="text" />
            <div>
              <i className="material-icons">send</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
