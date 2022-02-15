import React from "react";
import {Link} from "react-router-dom";
import HomeMV from "../../../utils/home_move";

function ReserveInfo(){

    return(
        <>
            <HomeMV />
            <div className='reserve portfolio_info'>
                <div className='con'>
                    <h2 className='page_tit'>스타벅스 리저브</h2>
                    <div className='cont_box cont_1'>
                        <div className='sub_tit'>스타벅스 리저브 리뉴얼 페이지</div>
                        
                        <div className='sub_txt'>
                            <ul>
                                <li>개인적으로 리디자인을 진행한 홈페이지 입니다.</li>
                                <li>브랜드 홈페이지 한군데를 타겟으로 진행한 개인 프로젝트입니다.</li>
                                <li></li> 
                            </ul>
                        </div>
                    </div>

                    <div className='cont_2'>
                        <div className='txt_box'>
                            <ul className="flex">
                                {/* <li className="flex">프로젝트 진행 기간 : 2021.06 ~ 2022. 02</li> */}
                                <li></li>
                            </ul>
                            <ul className='link_box'>
                                <li className='target_move'><a href="https://www.starbucks.co.kr/coffee/reserve_info.do" target="_blank" title="스타벅스 리저브 홈페이지 새창으로 바로가기" rel="noreferrer">스타벅스 리저브 홈페이지 바로가기 (https://www.starbucks.co.kr/coffee/reserve_info.do)</a></li>
                            </ul>
                        </div>
                        <div className='img_box'>
                            <ul className='img_list'>
                                <li>
                                    <div className='img_box'>
                                        
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='cont_3'>

                        </div>
                    </div>
                </div>
            </div>
            <Link to="/starbucksReserve" rel="noopener noreferrer" target="_blank">스타벅스 리저브 코딩 페이지</Link>
        </>
    )
}

export default ReserveInfo;