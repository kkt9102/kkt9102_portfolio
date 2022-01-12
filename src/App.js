
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';
import Clean from './pages/portsolio/clean/clean';
import Acrc from './pages/portsolio/acrc/acrc';
import Reserve from './pages/portsolio/reserve/reserve';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Reserve" element={<Reserve/>}/>
          <Route path="/Clean" element={<Clean/>}/>
          <Route path="/Acrc" element={<Acrc/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
