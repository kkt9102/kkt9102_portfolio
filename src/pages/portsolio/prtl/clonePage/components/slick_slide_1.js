import React from 'react';
import Slider from "react-slick";


import "../../clonePage/resource/css/slick.css"; 
import "../../clonePage/resource/css/slick-theme.css";

import '../../../../../resource/css/common.css';
import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

import Smaple from '../resource/img/sample.gif';

const NormalSlick1 = () => {
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
          vertical: false,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: <PrevArrow/>,
          nextArrow: <NextArrow/>
      };
      return(
          <>
              <Slider {...settings}>
                    <li className={prtl.img_slide}>
                        <a href="" title="" rel="">
                            <img src={Smaple} alt=""></img>
                        </a>
                    </li>
                    <li className={prtl.img_slide}>
                        <a href="" title="" rel="">
                            <img src={Smaple} alt=""></img>
                        </a>
                    </li>
                    <li className={prtl.img_slide}>
                        <a href="" title="" rel="">
                            <img src={Smaple} alt=""></img>
                        </a>
                    </li>
                    <li className={prtl.img_slide}>
                        <a href="" title="" rel="">
                            <img src={Smaple} alt=""></img>
                        </a>
                    </li>
                    <li className={prtl.img_slide}>
                        <a href="" title="" rel="">
                            <img src={Smaple} alt=""></img>
                        </a>
                    </li>
              </Slider>
          </>
      )
  }
  

export default NormalSlick1;