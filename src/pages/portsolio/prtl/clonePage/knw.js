import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import KnwMain from './knwMain';
import KnwlgBoard from "./components/knw/board/list/KnwlgBoard1";

import knw from './resource/css/knw.module.css';

const Knw = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/knwMain" element={<KnwMain/>} />
                    {/* <Route path="/clonePage/components/knw/KnwlgBoard" element={<KnwlgBoard/>}/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Knw;