import "./styles.css";
import { Link } from "react-router-dom";

export default function Green() {
  return (
    <div className="Green">
      <h1>You're so pretty Green!</h1>
      <Link to="/"> Go Back </Link>
    </div>
  );
}
