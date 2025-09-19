import React, { Suspense,lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go to Dashboard Page
      </button>
    </>
  );
}

export default App;
