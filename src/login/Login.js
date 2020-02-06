import React from "react";
import "./Login.css";
import { useInput } from "../hooks/useInput";

function Login({ saveNickname, nickname }) {
  const { value, setValue, reset } = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    saveNickname(value);
    reset();
  }

  return (
    <div className="login-container">
      <h1>Welcome to the Chat</h1>
      <h2>Choose a nickname to participate: </h2>
      <form onSubmit={handleSubmit} className="form-login">
        <input
          type="text"
          name="nickname"
          autoComplete="off"
          value={value}
          onChange={setValue}
        />
      </form>
      <span>{nickname}</span>
    </div>
  );
}

export default Login;
