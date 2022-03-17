import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import KnwMain from './knwMain';
import KnwlgBoard1 from "./components/knw/board/list/KnwlgBoard1";
import KnwJoinType from "./components/knw/board/knw_join_type";

import knw from './resource/css/knw.module.css';

const Knw = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/knwMain" element={<KnwMain/>} />
                    <Route path="/clonePage/components/knw/KnwlgBoard1" element={<KnwlgBoard1/>}/>
                    <Route path="/clonePage/components/knw/KnwJoinType" element={<KnwJoinType/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Knw;