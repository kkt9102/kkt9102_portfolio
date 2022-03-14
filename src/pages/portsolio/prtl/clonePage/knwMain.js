import React from 'react';

import '../../../../resource/css/common.css';
import knw from './resource/css/knw.module.css';

import KnwHeader from './components/knw/header_knw';
import KnwMainBody from './components/knw/main_body_knw';


const KnwMain = () => {
    return(
        <>
            <div className={knw.knw_section}>
                <KnwHeader/>
                <KnwMainBody/>
            </div>
        </>
    )
}

export default KnwMain;