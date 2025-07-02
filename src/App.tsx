import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OSBook from './pages/OSBook';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/osbook" element={<OSBook />} />
      </Routes>
    </Router>
  );
};

export default App;
