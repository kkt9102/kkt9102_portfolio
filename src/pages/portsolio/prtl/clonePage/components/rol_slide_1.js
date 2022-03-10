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
          style={{ ...style, display: 'block', right: 0 }}
          onClick={onClick}
          />
        );
      }
      const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', right: 0 }}
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
        centerMode: false,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };
    return(
        <>
            <Slider {...settings}>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <div className={prtl.tit}>공지사항 샘플 글입니다.</div>
                    <div className={prtl.red_dt}>2022-03-09</div>
                </li>
            </Slider>
        </>
    )
}

export default RolSlide1;