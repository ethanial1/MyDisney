import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./views/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
