import { Link } from 'react-router-dom';
import './QuestionCard.postcss';

export default function QuestionCard({ question }) {
  return (
    <div className="question-card">
      <Link to={`/question/${question.id}`} className="question-title">
        {question.title}
      </Link>
      <p className="question-body">{question.body.slice(0, 100)}...</p>
    </div>
  );
}
