import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import '../../../../../../../resource/css/common.css';
import knw from '../../../resource/css/knw.module.css';

import KnwHeader from '../header_knw';
import KnwlgLeftMenu from '../knwlg_menu';
import KnwlgType1 from './list/knwlg_type1';
import Footer from '../../footer';

const KnwlgBoard1 = () => {
    return(
        <div className={knw.knw_section}>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 국민권익위원회 업무포털 혁신게시판 클론페이지</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 업무포털 혁신게시판 클론페이지" />
                </Helmet>
            </HelmetProvider>
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