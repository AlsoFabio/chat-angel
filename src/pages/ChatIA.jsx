// ChatApp.js
import React, { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import { fetchAIResponse } from "../library/IAChat";
import "./ChatIA.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    // En este punto, debes enviar la solicitud a tu API de IA y obtener la respuesta.
    // Luego, agrega la respuesta a la lista de mensajes.
    const response = await fetchAIResponse(newMessage); // Implementa esta función según tus necesidades.
    setMessages([...messages, { text: newMessage, isUser: true }, { text: response, isUser: false }]);
    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isUser={message.isUser} />
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatApp;
