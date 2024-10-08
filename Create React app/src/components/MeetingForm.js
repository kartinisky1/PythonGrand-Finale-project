// MeetingForm.js
import React, { useState } from 'react';
import axios from '../api/axios';

function MeetingForm() {
  const [parentId, setParentId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [agenda, setAgenda] = useState('');

  const scheduleMeeting = async (e) => {
    e.preventDefault();
    try {
      await axios.post('schedule_meeting/', {
        parent_id: parentId,
        teacher_id: teacherId,
        meeting_date: meetingDate,
        agenda: agenda,
      });
      alert('Meeting scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling meeting:', error);
    }
  };

  return (
    <form onSubmit={scheduleMeeting}>
      <input
        type="text"
        placeholder="Parent ID"
        value={parentId}
        onChange={(e) => setParentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teacher ID"
        value={teacherId}
        onChange={(e) => setTeacherId(e.target.value)}
      />
      <input
        type="datetime-local"
        value={meetingDate}
        onChange={(e) => setMeetingDate(e.target.value)}
      />
      <textarea
        placeholder="Agenda"
        value={agenda}
        onChange={(e) => setAgenda(e.target.value)}
      />
      <button type="submit">Schedule Meeting</button>
    </form>
  );
}

export default MeetingForm;
