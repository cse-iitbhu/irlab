import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OSBook from './pages/OSBook';
import MUSIA from "./pages/MUSIA";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/osbook" element={<OSBook />} />
        <Route path="/musia" element={<MUSIA />} />
      </Routes>
    </Router>
  );
};

export default App;
