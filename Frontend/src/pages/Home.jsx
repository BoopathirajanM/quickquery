import { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import './Home.postcss';
import axios from 'axios';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home">
      <h2>All Questions</h2>
      {questions.map(q => <QuestionCard key={q.id} question={q} />)}
    </div>
  );
}
