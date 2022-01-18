import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import './App.css';
import Main from './pages/main/main';
import Clean from './pages/portsolio/clean/clean';
import Acrc from './pages/portsolio/acrc/acrc';
import Reserve from './pages/portsolio/reserve/reserve';
import Modal from './utils/modal_pop';
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
       {/* <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal> */}
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
