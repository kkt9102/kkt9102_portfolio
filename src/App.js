import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import $ from 'jquery';

import Loding from './utils/loding';
import Css from './css';
import Main from './pages/main/main';
import Reserve from './pages/portsolio/reserve/reserve';
import Clean from './pages/portsolio/clean/clean';
import Acrc from './pages/portsolio/acrc/acrc';
import AcrcChild from './pages/portsolio/acrc_children/child';
import Prlt from './pages/portsolio/prtl/prtl';
import Resume from './pages/main/components/resume';
import CloneMain from './pages/portsolio/prtl/clonePage/CloneMain';
import KnwMain from './pages/portsolio/prtl/clonePage/knwMain';
import KnwlgBoard1 from './pages/portsolio/prtl/clonePage/components/knw/board/KnwlgBoard1';
import KnwJoinType from './pages/portsolio/prtl/clonePage/components/knw/board/knw_join_type';
import KnwSamType from './pages/portsolio/prtl/clonePage/components/knw/board/knw_sam_type';
import KnwNoticeType from './pages/portsolio/prtl/clonePage/components/knw/board/knw_notice_type';
import OffActCreateForm from './pages/portsolio/prtl/clonePage/components/knw/board/form/off_act_create';

$(document).ready(function(){
  setTimeout(function(){
    $('.lds-ripple').fadeOut();
  },100);
  setTimeout(function(){
    $('.lodigng_txt').fadeIn();
    setTimeout(function(){
      $('.lodigng_txt').fadeOut();
    },1500);
  },1000);
  setTimeout(function(){
    $('.loding_page').fadeOut();
  },3000);
  
})


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
 
  const PageWidth = document.documentElement.scrollWidth;

  return (
    <>
    <Loding/>
    <Css/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Reserve/" element={<Reserve/>}/>
          <Route path="/Clean" element={<Clean/>}/>
          <Route path="/Acrc" element={<Acrc/>}/>
          <Route path="/AcrcChild" element={<AcrcChild/>}/>
          <Route path="/Prtl" element={<Prlt/>}/>
          <Route path="/clonePage/CloneMain" element={<CloneMain/>}/>
          <Route path="/clonePage/KnwMain" element={<KnwMain/>}/>
          <Route path="/clonePage/components/knw/KnwlgBoard1" element={<KnwlgBoard1/>}/>
          <Route path="/clonePage/components/knw/KnwJoinType" element={<KnwJoinType/>}/>
          <Route path="/clonePage/components/knw/KnwSamType" element={<KnwSamType/>}/>
          <Route path="/clonePage/components/knw/KnwNoticeType" element={<KnwNoticeType/>}/>
          <Route path="/clonePage/components/knw/OffActCreateForm" element={<OffActCreateForm/>}/>
          <Route path="/Resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
