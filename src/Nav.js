import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <h1>Welcome to the Color Factory</h1>
        <h3>Please select a color</h3>
        <Link to="/Red">Red</Link>
        <Link to="/Yellow">Yellow</Link>
        <Link to="/Green">Green</Link>
      </nav>
    </div>
  );
}
