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
import { Book} from './pages/Book';
import { Teaching } from './pages/Teaching';
import { OSBook } from './pages/OSBook.tsx';
import MUSIA from './pages/MUSIA.tsx';
import Subtask1 from './pages/Subtask1.tsx';
import Subtask2 from './pages/Subtask2.tsx';
import Subtask3 from './pages/Subtask3.tsx';



function App() {
  
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/irlab' element={<Home/>}></Route>
        <Route path='/irlab/index.html' element={<Home/>}></Route>
        <Route path='/members' element={<Members/>}></Route>
        <Route path='/research' element={<Research/>}></Route>
        <Route path='/resources' element={<Resources/>}></Route>
        <Route path='/Book' element={<Book/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/teach' element={<Teaching/>}></Route>
        {/* <Route path='/teach' element={<Teaching/>}></Route> */}
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route path='/publications' element={<Publications/>}></Route>
        <Route path='/os-book' element={<OSBook />} />
        <Route path='/MUSIA' element={<MUSIA />} />
        <Route path='/Subtask1' element={<Subtask1 />} />
        <Route path='/Subtask2' element={<Subtask2 />} />
        <Route path='/Subtask3' element={<Subtask3 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
