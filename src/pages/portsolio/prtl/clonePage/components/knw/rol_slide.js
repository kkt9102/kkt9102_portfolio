import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "../../../clonePage/resource/css/slick.css"; 
import "../../../clonePage/resource/css/slick-theme.css";

import '../../../../../../resource/css/common.css';
import knw from '../../resource/css/knw.module.css';

const RolSlide = () => {

    const PrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className='rol_prev'
          style={{ ...style, display: 'block', left: 103 +'%', width: 10, height: 10, fontSize: 18 }}
          onClick={onClick}
          />
        );
      }
      const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className='rol_next'
            style={{ ...style, display: 'block', top:20, right: -4.8 + '%', width: 10, height: 10, fontSize: 18 }}
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
        centerPadding: 10,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };
    return(
        <>
            <Slider {...settings}>
                <li className='flex_imp flex_jc_sb'>
                    <Link to="">
                        <div className={knw.tit}><i className="xi-volume-up"></i><span>[메일]</span>메일 알림 샘플입니다.</div>
                        <div className={knw.reg_dt}>2022-03-09</div>
                    </Link>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <Link to="">
                        <div className={knw.tit}><i className="xi-volume-up"></i><span>[근태신청서]</span>공지사항 샘플 글입니다.</div>
                        <div className={knw.reg_dt}>2022-03-09</div>
                    </Link>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <Link to="">
                        <div className={knw.tit}><i className="xi-volume-up"></i><span>[메일]</span>메일 알림 샘플입니다.메일 알림 샘플입니다.메일 알림 샘플입니다.</div>
                        <div className={knw.reg_dt}>2022-03-09</div>
                    </Link>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <Link to="">
                        <div className={knw.tit}><i className="xi-volume-up"></i><span>[메일]</span>메일 알림 샘플입니다.메일 알림 샘플입니다.메일 알림 샘플입니다.</div>
                        <div className={knw.reg_dt}>2022-03-09</div>
                    </Link>
                </li>
                <li className='flex_imp flex_jc_sb'>
                    <Link to="">
                        <div className={knw.tit}><i className="xi-volume-up"></i><span>[메일]</span>메일 알림 샘플입니다.메일 알림 샘플입니다.메일 알림 샘플입니다.</div>
                        <div className={knw.reg_dt}>2022-03-09</div>
                    </Link>
                </li>
            </Slider>
        </>
    )
}

export default RolSlide;