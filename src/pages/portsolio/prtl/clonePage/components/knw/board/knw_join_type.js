import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import knw from '../../../resource/css/knw.module.css';

import KnwHeader from '../header_knw';
import KnwJoinLists from './list/knw_List/join_list_array';
import Paging from '../paging_sample';
import Footer from '../../footer';


const KnwJoinType = () => {
    return(
        <div className={`${knw.knw_section} ${knw.knw_join_section}`}>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 국민권익위원회 업무포털 혁신게시판 클론페이지</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 업무포털 혁신게시판 클론페이지" />
                </Helmet>
            </HelmetProvider>
            <KnwHeader/>
            <div className={`${knw.knwlg_board_header} flex flex_jc_sb flex_ai_c mar_top_20`}>
                <div className={knw.knwlg_tit}>권익지식 이음터</div>
                <div className={knw.print}><i className="xi-print"></i></div>
            </div>

            <div className={knw.knw_top_list}>
                <div className={`${knw.top_list_tit} ${knw.knw_bullet}`}>많이 본 Q&A TOP3</div>
                <ul className={`${knw.knw_join_list} flex flex_jc_sb`}>
                    <li className={`${knw.top_1} flex flex_wrap_wrap relative`}>
                        <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>분야별</div>
                        <div className={`${knw.tit}`}>권익지식 이음터 제목입니다.</div>
                        <div className={`${knw.contents}`}>권익지식 이음터 내용부분입니다.</div>
                    </li>
                    <li className={`${knw.top_2} flex flex_wrap_wrap relative`}>
                        <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>분야별</div>
                        <div className={`${knw.tit}`}>권익지식 이음터 제목입니다.권익지식 이음터 제목입니다.권익지식 이음터 제목입니다.</div>
                        <div className={`${knw.contents}`}>권익지식 이음터 내용부분입니다.권익지식 이음터 내용부분입니다.</div>
                    </li>
                    <li className={`${knw.top_3} flex flex_wrap_wrap relative`}>
                        <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>분야별</div>
                        <div className={`${knw.tit}`}>권익지식 이음터 제목입니다.</div>
                        <div className={`${knw.contents}`}>권익지식 이음터 내용부분입니다.권익지식 이음터 내용부분입니다.권익지식 이음터 내용부분입니다.권익지식 이음터 내용부분입니다.</div>
                    </li>
                </ul>
            </div>

            {/* list section */}
            <div className={knw.search_form}>
                <form>
                    <table>
                        <colgroup>
                            <col width="120"></col>
                            <col width="480"></col>
                            <col width="120"></col>
                            <col width="480"></col>
                        </colgroup>
                        {/* <caption>지식마당 검색조건 영역</caption> */}
                        <tbody>
                            <tr>
                                <th>제목</th>
                                <td>
                                    <span>
                                        <input className={knw.radio_type} type="radio" id="all_ck" name="search_sort_1" checked></input>
                                        <label for="all_ck">전체</label>
                                    </span>
                                    <span>
                                        <input className={knw.radio_type} type="radio" id="answer_ck" name="search_sort_1"></input>
                                        <label for="answer_ck">답변을 기다리는 질문</label>
                                    </span>
                                </td>
                                <th>정렬</th>
                                <td>
                                    <span>
                                        <input className={knw.radio_type} type="radio" id="red_dt_ck" name="search_sort_2" checked></input>
                                        <label for="red_dt_ck">등록 최근일 순</label>
                                    </span>
                                    <span>
                                        <input className={knw.radio_type} type="radio" id="cmt_count_ck" name="search_sort_2"></input>
                                        <label for="cmt_count_ck">답변 높은 순</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>분야선택</th>
                                <td colSpan="3" className={knw.part_ck_box}>
                                    <span>
                                        <input className={knw.check_type} type="checkbox" id="part_all_slt" name="part_slt"></input>
                                        <label for="part_all_slt">전체</label>
                                    </span>
                                    <span>
                                        <input className={knw.check_type} type="checkbox" id="prtl_1" name="part_slt"></input>
                                        <label for="prtl_1">분야1</label>
                                    </span>
                                    <span>
                                        <input className={knw.check_type} type="checkbox" id="prtl_2" name="part_slt"></input>
                                        <label for="prtl_2">분야2</label>
                                    </span>
                                    <span>
                                        <input className={knw.check_type} type="checkbox" id="prtl_3" name="part_slt"></input>
                                        <label for="prtl_3">분야3</label>
                                    </span>
                                    <span>
                                        <input className={knw.check_type} type="checkbox" id="prtl_4" name="part_slt"></input>
                                        <label for="prtl_4">분야목록</label>
                                    </span>
                                    <span>
                                        <input className={knw.check_type} type="checkbox" id="prtl_5" name="part_slt"></input>
                                        <label for="prtl_5">분야4</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>단어검색</th>
                                <td colSpan="3">
                                    <select className={knw.select_type}>
                                        <option>제목</option>
                                        <option>내용</option>
                                        <option>작성자</option>
                                    </select>
                                    <input className={knw.type_1} type="text" placeholder='검색어를 입력해 주세요.' title="검색어를 입력해 주세요."></input>
                                    <input className={knw.search_option} type="checkbox" id="del_view" name="del_view"></input>
                                    <label for="del_view">삭제글 보기</label>
                                    <button className={knw.search_btn}>검색</button>
                                    <button className={knw.reset_btn}>초기화</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            {/* board_list */}
            <div className={knw.board_list_section}>
                <div className={`${knw.list_header} flex flex_jc_sb`}>
                    <div className={`${knw.count} flex`}>전체<span>1,234</span>건</div>
                    {/* <div className={knw.exceldown_btn}><i className='xi-file-download'></i>엑셀 다운로드</div> */}
                </div>
            </div>
            <ul className={`${knw.knw_join_board_list} flex flex_wrap_wrap`}>
                <KnwJoinLists/>
            </ul>

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

export default KnwJoinType;