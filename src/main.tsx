import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import ParentApp from "./ParentApp.tsx";
import SignIn from "./SignIn.tsx";
import "./index.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<App />} />
        <Route path="/parent" element={<ParentApp />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Router />);