import React from 'react';

import { Link } from 'react-router-dom';

import '../../../../../../resource/css/common.css';
import knw from '../../resource/css/knw.module.css';

import RolSlide from './rol_slide';
import NewKnwlg from './new_knwlg';
import Pupknwlg from './pup_knw';
import KnwBrige from './knw_brige';
import KnwSam from './knw_sam';
import ExcStaff from './exc_staff';

// img
import MyAct from '../../resource/img/knw/knw_main_icon.png';


const KnwMainBody = () => {
    return (
        <>
            <div className={`${knw.body_section}`}>

                <div className={`${knw.section_1} flex flex_jc_sb`}>
                    <div className={`${knw.knw_search} flex`}>
                        <form className={`${knw.search_box} flex flex_jc_sb flex_ai_c`}>
                            <div className={`${knw.search} flex flex_ai_c`}>
                                <label htmlFor="Knw_Search">지식검색</label>
                                <input type="text" id="Knw_Search" name="Knw_Search" placeholder='검색어를 입력하세요'></input>
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </div>
                            <div className={`${knw.ex_search} flex flex_jc_c flex_ai_c`}>
                                <span>상세검색</span>
                            </div>
                        </form>
                    </div>
                    <div className={`${knw.rol_slide} flex`}>
                        <ul>
                            <RolSlide/>
                        </ul>
                        <div className={knw.rol_slide_btn}></div>
                    </div>
                </div>

                <div className={`${knw.section_2}`}>
                    <ul className={`${knw.my_act} flex`}>
                        <li className={`${knw.this_year} flex`}>
                            <div>
                                <div className={knw.section_tit}>나의 지식 활동 현황</div>
                                <div className={knw.years}>2022년</div>
                            </div>
                            <img src={MyAct} alt=""></img>
                        </li>
                        <li className={`flex flex_jc_sb`}>
                            <div className={`${knw.left} flex flex_dir_c flex_jc_sb`}>
                                <div className={knw.tit}>지식마당</div>
                                <button>글쓰기</button>
                            </div>
                            <ul className={`${knw.right} flex flex_dir_c flex_jc_sb`}>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div>첨부등록</div>
                                    <div className={knw.count}><span>3</span>건</div>
                                </li>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div>미첨부 등록</div>
                                    <div className={knw.count}><span>1</span>건</div>
                                </li>
                            </ul>
                        </li>
                        <li className={`flex flex_jc_sb`}>
                            <div className={`${knw.left} flex flex_dir_c flex_jc_sb`}>
                                <div className={knw.tit}>권익지식 이음터</div>
                                <button>질문등록</button>
                            </div>
                            <ul className={`${knw.right} flex flex_dir_c flex_jc_sb`}>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div>질문</div>
                                    <div className={knw.count}><span>12</span>건</div>
                                </li>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div>답변</div>
                                    <div className={knw.count}><span>3</span>건</div>
                                </li>
                            </ul>
                        </li>
                        <li className={`flex flex_jc_sb`}>
                            <div className={`${knw.left} flex flex_dir_c flex_jc_sb`}>
                                <div className={knw.tit}>권익샘</div>
                                <button>상담등록</button>
                            </div>
                            <ul className={`${knw.right} flex flex_dir_c flex_jc_sb flex_ai_fe`}>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div>상담신청</div>
                                    <div className={knw.count}><span>5</span>건</div>
                                </li>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div>권익샘</div>
                                    <div className={knw.count}><span>0</span>건</div>
                                </li>
                            </ul>
                        </li>
                        <li className={`flex flex_jc_sb`}>
                            <div className={`${knw.left} flex flex_dir_c flex_jc_sb`}>
                                <div className={knw.tit}>오프라인 활동</div>
                                <button>활동등록</button>
                            </div>
                            <ul className={`${knw.right} flex`}>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div className={knw.count}><span>2</span>건</div>
                                </li>
                            </ul>
                        </li>
                        <li className={`flex flex_jc_sb`}>
                            <div className={`${knw.left} flex flex_dir_c flex_jc_sb`}>
                                <div className={knw.tit}>예상 마일리지</div>
                                <button>자세히보기</button>
                            </div>
                            <ul className={`${knw.right} flex`}>
                                <li className={`flex flex_dir_c flex_ai_fe`}>
                                    <div className={knw.count}><span>100</span>점</div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={`${knw.section_3} flex flex_jc_sb`}>
                    <div className={`${knw.new_knwlg}`}>
                        <div className={`${knw.main_cont_box_header} flex flex_jc_sb flex_ai_c`}>
                            <div className={knw.tit}>최신지식</div>
                            <button>
                                <Link to="/clonePage/components/knw/KnwlgBoard1">
                                <i className='xi-plus'></i>
                                </Link>
                            </button>
                        </div>
                        <nav>
                            <NewKnwlg/>
                        </nav>
                    </div>
                    <div className={`${knw.pup_knwlg}`}>
                        <div className={`${knw.main_cont_box_header} flex flex_jc_sb flex_ai_c`}>
                            <div className={knw.tit}>인기지식</div>
                            <div className={knw.slt_box}>
                                <select>
                                    <option>조회수</option>
                                    <option>등록일</option>
                                </select>
                            </div>
                            <button><i className='xi-plus'></i></button>
                        </div>
                        <nav>
                            <Pupknwlg/>
                        </nav>
                    </div>
                </div>

                <div className={`${knw.section_4} flex flex_jc_sb`}>
                    <div className={`${knw.knw_brige}`}>
                        <div className={`${knw.main_cont_box_header} flex flex_jc_sb flex_ai_c`}>
                            <div className={knw.tit}>권익지식 이음터</div>
                            <button><i className='xi-plus'></i></button>
                        </div>
                        <nav>
                            <KnwBrige/>
                        </nav>
                    </div>
                    <div className={`${knw.right_cont_box} flex flex_jc_sb`}>
                        <div className={`${knw.knw_sam}`}>
                            <div className={`${knw.main_cont_box_header} flex flex_jc_sb flex_ai_c`}>
                                <div className={knw.tit}>권익샘</div>
                                <button><i className='xi-plus'></i></button>
                            </div>
                            <nav>
                                <KnwSam/>
                            </nav>
                        </div>
                        <div className={`${knw.exc_staff_list}`}>
                            <div className={`${knw.main_cont_box_header} flex flex_jc_sb flex_ai_c`}>
                                <div className={knw.tit}>우수직원</div>
                                <button><i className='xi-plus'></i></button>
                            </div>
                            <nav>
                                <ExcStaff/>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KnwMainBody;