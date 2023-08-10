import { Route, Routes, Navigate } from "react-router-dom";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
import Colors from "./colors";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/:color" element={<Colors />} />
      <Route path="/Red" element={<Red />} />
      <Route path="/Yellow" element={<Yellow />} />
      <Route path="/Green" element={<Green />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
