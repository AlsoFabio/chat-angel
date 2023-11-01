import React from "react";
import "./ChatMessage.css"; // Importa el archivo CSS

const ChatMessage = ({ message, isUser }) => {
  const messageClass = isUser ? "user" : "ai";

  return (
    <div className={`message ${messageClass}`}>
      {message}
    </div>
  );
};

export default ChatMessage;
