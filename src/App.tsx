import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OSBook from './pages/OSBook';
import MUSIA from "./pages/MUSIA";
import Subtask1 from "./pages/Subtask1";
import Subtask2 from "./pages/Subtask2";
import Subtask3 from "./pages/Subtask3";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/osbook" element={<OSBook />} />
        <Route path="/musia" element={<MUSIA />} />
        <Route path="/subtask1" element={<Subtask1/>}/>
        <Route path="/subtask2" element={<Subtask2/>}/>
        <Route path="/subtask3" element={<Subtask3/>}/>
      </Routes>
    </Router>
  );
};

export default App;
