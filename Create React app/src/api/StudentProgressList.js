import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

function StudentProgressList({ studentId }) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get(`get_progress/${studentId}/`);
        setProgress(response.data);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, [studentId]);

  return (
    <div>
      <h2>Student Progress</h2>
      <ul>
        {progress.map((item) => (
          <li key={item.id}>
            <strong>Subject:</strong> {item.subject}<br />
            <strong>Date:</strong> {item.date}<br />
            <strong>Comments:</strong> {item.comments}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentProgressList;
