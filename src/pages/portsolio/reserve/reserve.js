import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

// img
import info_bg1 from '../../../resource/img/reserve/reserve_3d_1.png';
import info_bg2 from '../../../resource/img/reserve/reserve_3d_2.png';
import info_bg3 from '../../../resource/img/reserve/reserve_3d_3.png';
import info_bg4 from '../../../resource/img/reserve/reserve_3d_4.png';
import reserve_kr from '../../../resource/img/reserve/reserve_kr.gif';
import reserve_us from '../../../resource/img/reserve/reserve_us.gif';

function Reserve(){
    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 스타벅스 리저브 리디자인</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 스타벅스 리저브 리디자인" />
                </Helmet>
            </HelmetProvider>
            <ScrollToTop/>
            <HomeMV/>
            <div className='reserve portfolio_info relative'>
                <div className='con2'>
                    <h2 className='page_tit'>스타벅스 리저브 (Re:Design)</h2>
                    <div className="page_alert"><span>※</span>이 페이지와 실제 코딩된 페이지는 비상업적 용도로 제작되었으며 개인적인 포트폴리오 용도로 제작되었음을 알려드립니다.</div>
                    <div className='cont_box cont_1'>
                        <div className='sub_tit'>스타벅스 리저브 홈페이지 (Re:Design)</div>
                        <div className='img_box img_1'>
                            <img src={info_bg1} alt="스타벅스 리저브 리:디자인 홈페이지"></img>
                        </div>
                        <div className='sub_txt'>
                            <ul>
                                <li>개인적으로 좋아하는 스타벅스 홈페이지 중 '리저브' 홈페이지를 리디자인 한 홈페이지 입니다.</li>
                                <li>스타벅스 리저브는 스타벅스 안의 또다른 스타벅스라는 생각으로 접근하였습니다.</li>
                                <li>홈페이지의 용도는 기존 스타벅스 홈페이지와 별개로 오직 스타벅스 리저브만을 소개하는 홈페이지로 기획하고 제작하였습니다.</li>
                                <li></li>
                            </ul>
                        </div>
                        <ul className='link_box flex_jc_c'>
                            <li className='target_move'>
                                <a href="https://starbucksreserve.co.kr" target="_blank" rel="noreferrer noopener">스타벅스 리저브 리:디자인 페이지 바로가기</a>
                            </li>
                        </ul>
                    </div>

                    <div className="cont_box cont_2">
                        <div className="sub_tit">Re:Design 의도</div>
                        <div className="sub_txt">
                            <ul>
                                <li>국내에서 커피브랜드 평판 순위 1위인<span>(한국기업평판연구소 빅데이터 분석결과 기준)</span> 스타벅스에서 운영되고 있는 스타벅스 리저브는</li>
                                <li>전국의 1,633개의 매장<span>(2021년 12월 기준)</span> 중에서 단 86곳에서만 운영되는 특별한 스타벅스 매장입니다.</li>
                                <li>실제로 리저브 매장을 방문하면 기존의 스타벅스와는 다른 인테리어와 리저브 전용Bar를 갖춘 모습과</li>
                                <li>기존의 스타벅스 로고와는 다른리저브 로고도 볼 수 있습니다. </li>
                                <li>하지만 홈페이지의 경우 매장의 인테리어와는 달리 일반적인 홈페이지 안에 서브 페이지로만 리저브 매장을 소개하고 있습니다.</li>
                                <li>
                                    <div className="img_box">
                                        <img src={reserve_kr} alt="스타벅스 코리아 리저브 소개페이지"></img>
                                        <div className="sub_txt">출처:스타벅스 코리아 리저브 소개 페이지&nbsp;<span>(https://www.starbucks.co.kr/store/store_reserve.do)</span></div>
                                    </div>
                                </li>
                                <li>위의 사진과 같이 기본적인 스타벅스 홈페이지의 서브 페이지로 간략하게 리저브를 소개하고 있습니다.</li>
                                <li>반면 미국 스타벅스의 경우 스타벅스 자체 홈페이지와 스타벅스 리저브용 홈페이지를 따로 두어 리저브만을 위한 홈페이지를 운영하고있습니다.</li>
                                <li>
                                    <div className="img_box">
                                        <img src={reserve_us} alt="미국 스타벅스 리저브 홈페이지 메인"></img>    
                                        <div className="sub_txt">출처:스타벅스 리저브 메인페이지&nbsp;<span>(https://www.starbucksreserve.com/en-us)</span></div>
                                    </div>
                                </li>
                                <li>이러한 이유로 스타벅스 코리아에서 리저브만을 위한 홈페이지를 따로 리:디자인을 진행해봤습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='cont_box cont_3'>
                        <div className='sub_tit'>컬러 배치</div>
                        <div className='sub_txt'>
                            <ul>
                                <li>리저브 매장을 직접 방문했을 때 일반적인 스타벅스 매장과는 다른 스타벅스 안의 또다른 스타벅스라는 느낌을 받았었습니다.</li>
                                <li>만약에 리저브 홈페이지를 만든다고 했을 때 기존의 스타벅스 로고와 같은 색상을 사용하지 않고 스타벅스 안의 또다른 스타벅스이면서 조금 더 고급스러운 느낌을 주기 위해
                                리저브 로고 색상을 포인트컬러로, 바탕색을 블랙 계열로 배치하였습니다.</li>
                                <li>이를 활용하여 기존의 홈페이지에 사용된 색을 배제하고 리저브만을 위한 독자적인 컬러를 사용하였습니다.</li>
                                <li>기존 홈페이지에는 <span className="color_box c_f6f6ef"></span>#F6F5EF 와 <span className="color_box c_2c2a29"></span>#2C2A29 색을 사용하고 포인트 컬러로 시즌에 따른 색을 사용하였다면
                                리저브 홈페이지의 배경색은 완전한 검은색 보다는 묵직한 느낌을 주는 <span className="color_box c_222222"></span>#222222 색상을 사용하고</li>
                                <li>포인트 컬러응 시즌에 따른 다양한 컬러 보다는 리저브 로고에 쓰인 컬러 <span className="color_box c_976d3f"></span>#976D3F 를 포인트 컬러로 배치했습니다.</li>
                            </ul>
                            <ul className='use_colors flex'>
                                <li className='color_1'>
                                    <div className="color_box c_222222"></div>
                                    <div className="sub_txt flex flex_dir_c flex_ai_c">
                                        <span>HEX : #222222</span>
                                        <span>RGB : rgb(34, 34, 34)</span>
                                        <span>HSL : hsl(0, 0%, 13%)</span>
                                    </div>
                                </li>
                                <li className='color_2'>
                                    <div className="color_box c_976d3f"></div>
                                    <div className="sub_txt flex flex_dir_c flex_ai_c">
                                        <span>HEX : #976D3F</span>
                                        <span>RGB : rgb(151, 109, 63)</span>
                                        <span>HSL : hsl(31, 41%, 42%)</span>
                                    </div>
                                </li>
                                <li className='color_3'>
                                    <div className="color_box c_eeeeee"></div>
                                    <div className="sub_txt flex flex_dir_c flex_ai_c">
                                        <span>HEX : #EEEEEE</span>
                                        <span>RGB : rgb(238, 238, 238)</span>
                                        <span>HSL : hsl(0, 0%, 93%)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='cont_box cont_4'>
                        <div className="sub_tit">사용된 언어, 모듈, API</div>
                        <div className="sub_txt">
                            <ul className="flex flex_wrap_wrap">
                                <li>#React</li>
                                <li>#KAKAO Map</li>
                                <li>#React-router-dom</li>
                                <li>#React-icons</li>
                            </ul>    
                        </div>
                    </div>

                    <div className="page_alert"><span>※</span>이 페이지와 실제 코딩된 페이지는 비상업적 용도로 제작되었으며 개인적인 포트폴리오 용도로 제작되었음을 알려드립니다.</div>
                </div>
            </div>
        </>
    )
}

export default Reserve;