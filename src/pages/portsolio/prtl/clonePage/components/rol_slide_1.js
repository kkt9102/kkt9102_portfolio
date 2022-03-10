import React from 'react';
import Slider from "react-slick";
import "../../clonePage/resource/css/slick.css"; 
import "../../clonePage/resource/css/slick-theme.css";

import '../../../../../resource/css/common.css';
import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

const RolSlide1 = () => {

    const PrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', left: 103 +'%', width: 10, height: 10, fontSize: 15 }}
          onClick={onClick}
          />
        );
      }
      const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', top:5, right: -4.7 + '%', width: 10, height: 10, fontSize: 15 }}
            onClick={onClick}
                />
              );
            }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        centerPadding: 40,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };
    return(
        <>
            <Slider {...settings}>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}><i class="xi-volume-up"></i>공지사항 샘플 글입니다.공지사항 샘플 글입니다.공지사항 샘플 글입니다.공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}><i class="xi-volume-up"></i>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}><i class="xi-volume-up"></i>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}><i class="xi-volume-up"></i>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}><i class="xi-volume-up"></i>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}><i class="xi-volume-up"></i>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
            </Slider>
        </>
    )
}

export default RolSlide1;