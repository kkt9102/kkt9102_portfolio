import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';
import ColorPop from './color_popup';

// img
import info_bg1 from '../../../resource/img/reserve/reserve_3d_1.png';
import info_bg2 from '../../../resource/img/reserve/reserve_3d_2.png';
import info_bg3 from '../../../resource/img/reserve/reserve_3d_3.png';
import info_bg4 from '../../../resource/img/reserve/reserve_3d_4.png';

function Reserve(){

    const [popup, setPopup] = useState(false);

    const onPopup = () => {
        setPopup(true);
    }
    const closePopuo = () => {
        setPopup(false);
    }

    const clickHandler = (color, e) => {
        console.log(color);
        e.preventDefault();
    }
    return(
        <>
            <Helmet>
                <title>kkt9102 Portfolio | 스타벅스 리저브 리디자인</title>
                <meta charSet="utf-8" />
                <meta name="description" content="kkt9102 Portfolio | 스타벅스 리저브 리디자인" />
            </Helmet>
            <ScrollToTop/>
            <HomeMV/>
            <div className='reserve portfolio_info relative'>
                <div className='con2'>
                    <h2 className='page_tit'>스타벅스 리저브 (Re:Design)</h2>
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
                    </div>
                    <div className='cont_box cont_2'>
                        <div className='sub_tit'>디자인 컨셉</div>
                        <div className='sub_txt'>
                            <ul>
                                <li>기존의 스타벅스 로고와 같은 색상을 사용하여 디자인을 하지 않고</li>
                                <li>리저브 로고 색상을 메인으로 사용하였습니다.</li>
                            </ul>
                            <div className='use_colors flex'>
                            <ColorPop open={popup} close={closePopuo}></ColorPop>
                                <div className='color_1' title="#222222" onClick={() => onPopup()} header="배경색1"></div>
                                <div className='color_2' title="#976d3f" onClick={() => onPopup()} header="배경색2"></div>
                                <div className='color_3' title="#eeeeee" onClick={() => onPopup()} header="배경색3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserve;