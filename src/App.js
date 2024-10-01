import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Archive from "./pages/Archive/Archive";
import Important from "./pages/Important/Important";
import Delete from "./pages/Delete/Delete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/important" element={<Important/>}/>
      <Route path="/delete" element={<Delete />}/>
    </Routes>
  );
}

export default App;
