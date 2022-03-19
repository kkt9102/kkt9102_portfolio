import React, {useState} from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import KnwHeader from '../../header_knw';

import Footer from '../../../footer';

import knw from '../../../../resource/css/knw.module.css';

// img
import custom_btm from '../../../../resource/img/custom_icon_bottom.png';
const OffActCreateForm = (state) => {

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
                <div className={knw.custom_icon}>
                    <img src={custom_btm} alt=""></img> 
                </div>
                <div className={knw.txt_box}>
                    오프라인 활동은 <span>반드시 사전 협의 완료</span> 후 등록 해 주시기 바랍니다.
                </div>
            </div>

            {/* form_1 */}
            <div className={knw.act_info_form}>
                <div className={`${knw.top_list_tit} ${knw.knw_bullet} mar_bot_10`}>기본정보</div>
                <div className={`${knw.create_form} mar_bot_30`}>
                    <form>
                        <table>
                            <colgroup>
                                <col width="120"></col>
                                <col width="480"></col>
                                <col width="120"></col>
                                <col width="480"></col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>활동명<span className={knw.ne_alert}>*</span></th>
                                    <td>
                                        <input type="text" id="act_name" name="act_name"></input>
                                    </td>
                                    <th>활동일<span className={knw.ne_alert}>*</span></th>
                                    <td>
                                        <input type="text" id="date_slt" name="date_slt"></input>
                                        <label htmlFor="date_slt"></label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>유형<span className={knw.ne_alert}>*</span></th>
                                    <td>
                                        <input type="text" id="act_type" name="act_type" readOnly></input>
                                        <button>선택</button>    
                                    </td>
                                    <th>주최자</th>
                                    <td>
                                        <input type="text" id="act_master" name="act_master" readOnly></input>
                                        <button>선택</button>    
                                    </td>
                                </tr>
                                <tr className={knw.fact_file_add}>
                                    <th>근거자료<span className={knw.ne_alert}>*</span></th>
                                    <td colSpan="3">
                                        <input type="file" id="fact_file" name="fact_file"></input>
                                        <label htmlFor="fact_file">파일추가</label>
                                        <button className={knw.file_del}>항목제거</button>
                                    </td>
                                </tr>
                                <tr className={knw.act_list_add}>
                                    <th>명단첨부<span className={knw.ne_alert}>*</span></th>
                                    <td colSpan="3">
                                        <input type="file" id="excel_list_add" name="excel_list_add"></input>
                                        <label htmlFor="excel_list_add"></label>
                                        <button className={knw.exceldown_btn}><i className='xi-file-download'></i>엑셀 양식 다운로드</button>
                                        <input id="file_name" className={knw.file_name} placeholder="선택된 파일이 없습니다."></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                {/*  form_2 */}
                <div className={`${knw.form_header} flex flex_jc_sb`}>
                    <div className={`${knw.top_list_tit} ${knw.knw_bullet} mar_bot_10`}>참석자 명단</div>
                    <div className={knw.count}>
                        업로드 수 : <span></span> / 최종 명단수 : <span></span>
                    </div>
                </div>
                <div className={`${knw.create_form} ${knw.off_act_create_form_2}`}>
                    <form>
                        <table>
                            <colgroup>
                                <col width="60"></col>
                                <col width="450"></col>
                                <col width="70"></col>
                                <col width="280"></col>
                                <col width="95"></col>
                                <col width="150"></col>
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
                                <tr>
                                    <td>1</td>
                                    <td className={knw.error_source}>
                                        <span>중복</span>
                                    </td>
                                    <td>
                                        김군
                                    </td>
                                    <td>
                                        혁신행정담당관
                                    </td>
                                    <td>
                                        행정주사
                                    </td>
                                    <td>
                                        조사관
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

            </div>

            <div className={`${knw.off_act_btn_box} flex flex_jc_sb`}>
                <div className={knw.center_btn}>
                    <button className={knw.insert_btn}>등록</button>
                </div>
                <button className={knw.go_list_btn}><i className="xi-apps"></i>목록</button>
            </div>

            <Footer/>
        </div>
    )
}

export default OffActCreateForm;