import React from "react";

function Message({ msg, sender, author }) {
  return (
    <div className="msg-wrap">
      {!sender && (
        <div className="msg-author">{author === "Servidor" ? "" : author}</div>
      )}
      <span className={sender ? "msg-sender" : "msg"}>{msg}</span>
    </div>
  );
}

export default Message;
