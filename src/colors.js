import { useParams } from "react-router-dom";
import "./styles.css";

export default function Colors() {
  const params = useParams();

  return (
    <div className="Colors">
      <h3>Please Choose Your Favourite Color From the List {params.name}</h3>
    </div>
  );
}
