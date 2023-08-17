import "./styles.css";
import { Link } from "react-router-dom";

export default function Yellow() {
  return (
    <div className="Yellow">
      <h1>You're so pretty Yellow!</h1>
      <Link to="/"> Go Back </Link>
    </div>
  );
}
