import { Link } from 'react-router-dom';
import './Header.postcss';

export default function Header() {
  return (
    <header className="header">
      <h1><Link to="/">QuickQuery</Link></h1>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/ask">Ask Question</Link>
      </nav>
    </header>
  );
}
