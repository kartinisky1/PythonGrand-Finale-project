import React from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import MeetingForm from './components/MeetingForm';

function App() {
  return (
    <div>
      <h1>Parent-Teacher Communication App</h1>
      <MessageForm />
      <MessageList senderId={1} recipientId={2} />
      <MeetingForm />
    </div>
  );
}

export default App;

import React from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import MeetingForm from './components/MeetingForm';
import StudentProgressForm from './components/StudentProgressForm';

function App() {
  return (
    <div>
      <h1>Parent-Teacher Communication App</h1>
      <MessageForm />
      <MessageList senderId={1} recipientId={2} />
      <MeetingForm />
      <StudentProgressForm /> {/* Add this line */}
    </div>
  );
}

export default App;


import React from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import MeetingForm from './components/MeetingForm';
import StudentProgressForm from './components/StudentProgressForm';
import StudentProgressList from './components/StudentProgressList';

function App() {
  return (
    <div>
      <h1>Parent-Teacher Communication App</h1>
      <MessageForm />
      <MessageList senderId={1} recipientId={2} />
      <MeetingForm />
      <StudentProgressForm />
      <StudentProgressList studentId={1} /> {/* Pass studentId here */}
    </div>
  );
}

export default App;
