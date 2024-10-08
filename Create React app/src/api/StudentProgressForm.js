import React, { useState } from 'react';
import axios from '../api/axios';

function StudentProgressForm() {
  const [studentId, setStudentId] = useState('');
  const [subject, setSubject] = useState('');
  const [comments, setComments] = useState('');

  const submitProgress = async (e) => {
    e.preventDefault();
    try {
      await axios.post('submit_progress/', {
        student: studentId,
        subject: subject,
        comments: comments,
      });
      alert('Progress submitted successfully!');
    } catch (error) {
      console.error('Error submitting progress:', error);
    }
  };

  return (
    <form onSubmit={submitProgress}>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Progress Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button type="submit">Submit Progress</button>
    </form>
  );
}

export default StudentProgressForm;
