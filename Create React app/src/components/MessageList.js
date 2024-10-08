// MessageList.js
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

function MessageList({ senderId, recipientId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`messages/${senderId}/${recipientId}/`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [senderId, recipientId]);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.timestamp}>
            <strong>{message.sender}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
