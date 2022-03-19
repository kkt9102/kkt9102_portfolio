import React from 'react';
import { HelmetProvider,Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import knw from '../../../resource/css/knw.module.css';

import KnwHeader from '../header_knw';
import KnwNoticeLists from './list/knw_List/notice_list_array';
import Paging from '../paging_sample';
import Footer from '../../footer';

const KnwNoticeType = () => {
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
                <div className={knw.knwlg_tit}>공지사항</div>
                <div className={knw.print}><i className="xi-print"></i></div>
            </div>

            <div className={knw.search_form}>
                <form>
                    <table>
                        {/* <caption></caption> */}
                        <colgroup>
                            <col width="120"></col>
                            <col width="1080"></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>단어 검색</th>
                                <td>
                                    <select className={knw.select_type}>
                                        <option>제목</option>
                                        <option>내용</option>
                                        <option>작성자</option>
                                    </select>
                                    <input className={knw.type_1} type="text" placeholder='검색어를 입력해 주세요.'></input>
                                    <button className={knw.search_btn}>검색</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            {/* list section */}
            <div className={knw.board_list_section}>
                <div className={`${knw.list_header} flex flex_jc_sb`}>
                    <div className={`${knw.count} flex`}>전체<span>1,234</span>건</div>
                    <div className={knw.exceldown_btn}><i className='xi-file-download'></i>엑셀 다운로드</div>
                </div>
            </div>

            <div className={knw.board_list}>
                <table className={knw.table_type_02}>
                    {/* <caption></caption> */}
                    <colgroup>
                        <col width="50"></col>
                        <col width="60"></col>
                        <col width="auto"></col>
                        <col width="50"></col>
                        <col width="80"></col>
                        <col width="120"></col>
                        <col width="50"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th className={knw.list_check_box}>
                                <input type="checkbox" name="list_check_all" id="list_check_all"></input>
                                <label htmlFor="list_check_all"></label>
                            </th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>첨부</th>
                            <th>작성자</th>
                            <th>등록일</th>
                            <th>조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        <KnwNoticeLists/>
                    </tbody>
                </table>    
            </div>
            {/* btn_box */}
            {/* paging */}
            <div className={`${knw.knw_create_btn_box} absolute_right`}>
                <Link to="" className={knw.create_btn}>
                    등록
                </Link>
            </div>
            <Paging/>

            <Footer/>
        </div>
    )
}

export default KnwNoticeType;