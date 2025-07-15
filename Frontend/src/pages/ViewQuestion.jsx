import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewQuestion.postcss';

export default function ViewQuestion() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/questions/${id}`)
      .then(res => setQuestion(res.data));
  }, [id]);

  if (!question) return <div className="loading">Loading...</div>;

  return (
    <div className="view-question">
      <h2>{question.title}</h2>
      <p>{question.body}</p>
    </div>
  );
}
