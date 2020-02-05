import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div>
      <h1>Chat</h1>
      <div className="container">
        <div className="chat">
          <div className="msg-wrap">
            <span className="msg">Hi there!</span>
          </div>
          <div className="msg-wrap">
            <span className="msg-sender">Hi there!</span>
          </div>
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
