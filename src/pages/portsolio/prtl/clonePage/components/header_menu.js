import react from 'react';
import {BsFillBookmarkStarFill} from 'react-icons/bs';

import '../../../../../resource/css/common.css';
import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

const PrtlHeader = () => {
    return (
        <>
            <ul className={`${prtl.top_menu} flex`}>
                <li className={`${prtl.search} flex`}>
                    <div className={prtl.menu_tit}>
                        <label>통합검색</label>
                    </div>
                    <input type="text" placeholder="검색어를 입력하세요"></input>
                    <button><i className="xi-search"></i></button>
                </li>
                <li className={`${prtl.user_search} flex`}>
                    <div className={prtl.menu_tit}>
                        <label>직원검색</label>
                    </div>
                    <select>
                        <option>이름</option>
                        <option>부서명</option>
                    </select>
                    <input type="text" placeholder="이름을 입력하세요"></input>
                    <button><i className="xi-search"></i></button>
                </li>
                <li className={`${prtl.user_info} flex flex_ai_c flex_jc_e`}>
                    <div className="">
                        <span className={prtl.name}><span>사용자</span>님</span>
                        <span className={prtl.dept}>(사용자의 부서명)</span>
                    </div>
                    <div className={prtl.user_setting}><i className="xi-cog"></i></div>
                    <div className={prtl.logout}><i className="xi-lock"></i></div>
                    <ul className={`${prtl.employee_op} flex flex_ai_c`}>
                        <li>홈페이지 관리자</li>
                        <li>인트라넷 관리자</li>
                    </ul>
                </li>
            </ul>
            <ul className={`${prtl.btm_menu} flex relative`}>
                <li>
                    <span>온-나라<i className="xi-documents-o"></i></span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>전자문서<i className="xi-documents-o"></i></span></li>
                            <li><span>메모관리<i className="xi-documents-o"></i></span></li>
                            <li><span>과제관리<i className="xi-documents-o"></i></span></li>
                            <li><span>회의관리<i className="xi-documents-o"></i></span></li>
                            <li><span>지시사항<i className="xi-documents-o"></i></span></li>
                            <li><span>온-나라 메일<i className="xi-documents-o"></i></span></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>공지</span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>공지사항</span></li>
                            <li><span>주간·월간계획</span></li>
                            <li><span>위원장 말씀자료</span></li>
                            <li><span>인사정보</span></li>
                            <li><span>교육정보</span></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>소식</span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>오늘의 매스컴</span></li>
                            <li><span>보도자료</span></li>
                            <li><span>카드뉴스</span></li>
                            <li><span>보도예약</span></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>소통</span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>자유게시판</span></li>
                            <li><span>고객의 소리</span></li>
                            <li><span>경조사</span></li>
                            <li><span>솔직담백방</span></li>
                            <li><span>설문조사</span></li>
                            <li><span>부정청탁 등 신고센터</span></li>
                            <li><span>성희롱·성폭력 신고</span></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>일정공유</span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>업무편람</span></li>
                            <li><span>서식자료</span></li>
                            <li><span>위원회법령</span></li>
                            <li><span>행정자료DB</span></li>
                            <li><span>MOU게시판</span></li>
                            <li><span>정보보안 개인정보보호</span></li>
                            <li><span>권익국회DB</span></li>
                            <li><span>의결정보</span></li>
                            <li><span>민원 빅데이터 동향</span></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>자료공유</span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>간부일정</span></li>
                            <li><span>권익위 일정</span></li>
                            <li><span>의사 일정</span></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>혁신게시판<i className="xi-documents-o"></i></span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>지식마당<i className="xi-documents-o"></i></span></li>
                            <li><span>권익지식 이음터<i className="xi-documents-o"></i></span></li>
                            <li><span>권익샘<i className="xi-documents-o"></i></span></li>
                            <li><span>공지사항<i className="xi-documents-o"></i></span></li>
                        </ul>
                    </div>
                </li> 
                <li>
                    <span>업무지원</span>
                    <div className={`${prtl.drop_menu} absolute`}>
                        <ul className={`flex flex_wrap_wrap`}>
                            <li><span>직원검색</span></li>
                            <li><span>회의실·조사실예약</span></li>
                            <li><span>장비예약</span></li>
                            <li><span>정부합동민원센터 전문상담 상담예약</span></li>
                            <li><span>온-라인 헬프데스크</span></li>
                            <li><span>S/W자료제공</span></li>
                            <li><span>SMS발송</span></li>
                        </ul>
                    </div>
                </li>
                <li className={prtl.bookmark}>
                    <BsFillBookmarkStarFill/>    
                </li>
            </ul>
        </>
    )
}

export default PrtlHeader;