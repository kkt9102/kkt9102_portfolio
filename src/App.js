import { BrowserRouter, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import './App.css';
import Main from './pages/main/main';
import Clean from './pages/portsolio/clean/clean';
import Acrc from './pages/portsolio/acrc/acrc';
import Reserve from './pages/portsolio/reserve/reserve';
// import StarbucksReserve from './pages/portsolio/reserve/reserve_main';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Reserve" element={<Reserve/>}/>
          <Route path="/Clean" element={<Clean/>}/>
          <Route path="/Acrc" element={<Acrc/>}/>
          {/* <Route path="./pages/portsolio/reserve/reserve_main" element={<StarbucksReserve/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
