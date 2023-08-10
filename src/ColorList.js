import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";

export default function ColorList() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}
