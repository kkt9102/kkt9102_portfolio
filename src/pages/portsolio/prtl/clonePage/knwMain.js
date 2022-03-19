import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';


import '../../../../resource/css/common.css';
import knw from './resource/css/knw.module.css';

import KnwHeader from './components/knw/header_knw';
import KnwMainBody from './components/knw/main_body_knw';
import Footer from './components/footer';


const KnwMain = () => {
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
            <KnwMainBody/>
            <Footer/>
        </div>
    )
}

export default KnwMain;