import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={<Signup username={username} setUsername={setUsername} />}
          />
          <Route
            path="/Dashboard"
            element={<Dashboard username={username} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
