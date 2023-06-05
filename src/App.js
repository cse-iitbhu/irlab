import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Members } from './pages/Members';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { Projects } from './pages/Projects';
import { Contactus } from './components/Contactus';
import { Resources } from './pages/Resources';



function App() {
  
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='members' element={<Members/>}></Route>
        <Route path='research' element={<Research/>}></Route>
        <Route path='resources' element={<Resources/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='contact' element={<Contactus/>}></Route>
        <Route path='publications' element={<Publications/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
