import { useState } from 'react';
import './AskQuestion.postcss';
import axios from 'axios';

export default function AskQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async () => {
    await axios.post('http://localhost:8080/api/questions', { title, body });
    alert("Question posted!");
    setTitle('');
    setBody('');
  };

  return (
    <div className="ask-question">
      <h2>Ask a Question</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Question Title"
        className="input"
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Question Details"
        className="textarea"
      />
      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );
}
