import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import KnwHeader from '../../header_knw';

import Footer from '../../../footer';

import knw from '../../../../resource/css/knw.module.css';

const OffActCreateForm = () => {
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
            <div className={`${knw.knwlg_board_header} flex flex_jc_sb flex_ai_c mar_top_20`}>
                <div className={knw.knwlg_tit}>오프라인 활동 등록</div>
                <div className={knw.print}><i className="xi-print"></i></div>
            </div>

            {/* contents */}
            <div className={`${knw.off_act_info} flex`}>
                <div className={knw.img_box}>
                    <img src="" alt=""></img> 
                </div>
                <div className={knw.txt_box}>
                    오프라인 활동은 <span>반드시 사전 협의 완료</span> 후 등록 해 주시기 바랍니다.
                </div>
            </div>

            {/* form_1 */}
            <div className={knw.act_info_form}>
                <div className={`${knw.top_list_tit} ${knw.knw_bullet}`}>기본정보</div>
                <div className={knw.create_form}>
                    <form>
                        <table>
                            <colgroup>
                                <col width="120"></col>
                                <col width=""></col>
                                <col width="120"></col>
                                <col width=""></col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>활동명</th>
                                    <td></td>
                                    <th>활동일</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>유형</th>
                                    <td></td>
                                    <th>주최자</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>근거자료</th>
                                    <td colSpan="3">

                                    </td>
                                </tr>
                                <tr>
                                    <th>명단첨부</th>
                                    <td colSpan="3">

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                {/*  form_2 */}
                <div className={`${knw.form_header} flex flex_jc_sb`}>
                    <div className={`${knw.top_list_tit} ${knw.knw_bullet}`}>참석자 명단</div>
                    <div className={knw.count}>
                        업로드 수 : <span></span> / 최종 명단수 : <span></span>
                    </div>
                </div>
                <div className={knw.create_form}>
                    <form>
                        <table>
                            <colgroup>
                                <col width="120"></col>
                                <col width=""></col>
                                <col width="120"></col>
                                <col width=""></col>
                                <col width="120"></col>
                                <col width=""></col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>구분</th>
                                    <th>이름</th>
                                    <th>부서</th>
                                    <th>직급</th>
                                    <th>직책</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </form>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default OffActCreateForm;