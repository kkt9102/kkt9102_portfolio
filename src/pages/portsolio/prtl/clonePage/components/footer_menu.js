import React from 'react';
import Slider from "react-slick";


import "../../clonePage/resource/css/slick.css"; 
import "../../clonePage/resource/css/slick-theme.css";

import '../../../../../resource/css/common.css';
import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

import icon1 from '../resource/img/icon1.png';
import icon2 from '../resource/img/icon2.png';
import icon3 from '../resource/img/icon3.png';
import icon4 from '../resource/img/icon4.png';
import icon5 from '../resource/img/icon5.png';
import icon6 from '../resource/img/icon6.png';
import icon7 from '../resource/img/icon7.png';
import icon8 from '../resource/img/icon8.png';
import icon9 from '../resource/img/icon9.png';
import icon10 from '../resource/img/icon10.png';

const FooterMenu = () => {
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className= 'prev_btns'
            style={{ ...style, display: 'block',top: 0 , left: -50, width: 50, height: 48, fontSize: 18, background: 'white', borderRight: '1px solid #dddddd', borderLeft: 'none' }}
            onClick={onClick}
            />
          );
        }
        const NextArrow = (props) => {
          const { className, style, onClick } = props;
          return (
            <div
              className='next_btns'
              style={{ ...style, display: 'block', top: 0, right: 0, width: 50, height: 48, fontSize: 18, background: 'white' }}
              onClick={onClick}
                  />
                );
              }
  
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
          autoplay: false,
          autoplaySpeed: 3000,
          prevArrow: <PrevArrow/>,
          nextArrow: <NextArrow/>
      };
      return(
          <>
              <Slider {...settings}>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon1} alt=""></img><a href="" title="" rel="">정책연구관리시스템(PRISM)</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon2} alt=""></img><a href="" title="" rel="">출입관리시스템</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon3} alt=""></img><a href="" title="" rel="">GPKI인증시스템</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon4} alt=""></img><a href="" title="" rel="">고충처리 e-시스템</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon5} alt=""></img><a href="" title="" rel="">(구)메일시스템</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon6} alt=""></img><a href="" title="" rel="">IT서비스관리</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon7} alt=""></img><a href="" title="" rel="">(구)디브레인</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon8} alt=""></img><a href="" title="" rel="">웹하드</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon9} alt=""></img><a href="" title="" rel="">보안USB</a>
                    </li>
                    <li className={`${prtl.footer_menu} flex_imp`}>
                        <img src={icon10} alt=""></img><a href="" title="" rel="">(구)청렴e시스템</a>
                    </li>
              </Slider>
          </>
      )
  }
  

export default FooterMenu;