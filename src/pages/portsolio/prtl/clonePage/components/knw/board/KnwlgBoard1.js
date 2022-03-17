import React from 'react';

import '../../../../../../../resource/css/common.css';
import knw from '../../../resource/css/knw.module.css';

import KnwHeader from '../header_knw';
import KnwlgLeftMenu from '../knwlg_menu';
import KnwlgType1 from './list/knwlg_type1';
import Footer from '../../footer';

const KnwlgBoard1 = () => {
    return(
        <div className={knw.knw_section}>
            <KnwHeader/>
            <div className={`${knw.knwlg_board_list} flex flex_jc_sb`}>
                <KnwlgLeftMenu/>
                <KnwlgType1/>
            </div>
            <Footer/>
        </div>
    )
}

export default KnwlgBoard1;