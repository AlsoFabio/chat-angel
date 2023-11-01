// ChatMessage.jsx
import React from "react";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? "user" : "ai"}`}>
      {message}
    </div>
  );
};

export default ChatMessage;