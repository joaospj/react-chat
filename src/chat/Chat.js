import React, { useState } from "react";
import "./Chat.css";
import Message from "./Message";
import { useInput } from "../hooks/useInput";

function Chat() {
  const [messages, setMessages] = useState([
    { msg: "Hi there!", sender: false },
    { msg: "Hi there!", sender: true }
  ]);

  const { value, setValue, reset } = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      setMessages([...messages, { msg: value, sender: true }]);
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
