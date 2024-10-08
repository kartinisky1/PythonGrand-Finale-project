// MessageForm.js
import React, { useState } from 'react';
import axios from '../api/axios';

function MessageForm() {
  const [senderId, setSenderId] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [content, setContent] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('send_message/', {
        sender_id: senderId,
        recipient_id: recipientId,
        content: content,
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Sender ID"
        value={senderId}
        onChange={(e) => setSenderId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipient ID"
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
      />
      <textarea
        placeholder="Write your message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Send Message</button>
    </form>
  );
}

export default MessageForm;
