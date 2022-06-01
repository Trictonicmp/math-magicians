import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="navbar">
    <Link to="/" className="icon-link">
      <span>Math</span>
      Magicians
    </Link>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/maths">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </header>
);

export default Nav;
