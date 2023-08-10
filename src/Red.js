import "./styles.css";
import { Link } from "react-router-dom";

export default function Red() {
  return (
    <div className="Red">
      <h1>You're so pretty Red!</h1>
      <Link to="/"> Go Back </Link>
    </div>
  );
}
