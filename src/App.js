import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loding from './utils/loding';
import Css from './css';
import Main from './pages/main/main';
import Reserve from './pages/portsolio/reserve/reserve';
import Clean from './pages/portsolio/clean/clean';
import Acrc from './pages/portsolio/acrc/acrc';
import AcrcChild from './pages/portsolio/acrc_children/child';
import Prlt from './pages/portsolio/prtl/prtl';
import Resume from './pages/main/components/resume';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  

  return (
    <>
    {/* <Loding/> */}
    <Css/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Reserve/" element={<Reserve/>}/>
          <Route path="/Clean" element={<Clean/>}/>
          <Route path="/Acrc" element={<Acrc/>}/>
          <Route path="/AcrcChild" element={<AcrcChild/>}/>
          <Route path="/Prtl" element={<Prlt/>}/>
          <Route path="/Resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
