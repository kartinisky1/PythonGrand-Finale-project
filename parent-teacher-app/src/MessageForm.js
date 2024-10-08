import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/send_message', {
        content: message,
        sender: "Parent"
      });
      console.log(response.data);  // Log the response from Django backend
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h3>Send a Message to Teacher</h3>
      <textarea
        placeholder="Type your message here"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MessageForm;
