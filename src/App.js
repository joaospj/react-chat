import React, { useState } from "react";
import Chat from "./chat/Chat";
import Login from "./login/Login";

function App() {
  const [nickname, setNickname] = useState("");

  function saveNickname(name) {
    setNickname(name.trim());
  }
  return (
    <div className="App">
      {nickname === "" ? (
        <Login saveNickname={saveNickname} nickname={nickname} />
      ) : (
        <Chat nickname={nickname} />
      )}
    </div>
  );
}

export default App;
