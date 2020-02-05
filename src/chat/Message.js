import React from "react";

function Message({ msg, sender }) {
  return (
    <div className="msg-wrap">
      <span className={sender ? "msg-sender" : "msg"}>{msg}</span>
    </div>
  );
}

export default Message;
