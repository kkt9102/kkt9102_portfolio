import React from 'react';
import Slider from "react-slick";


import "../../clonePage/resource/css/slick.css"; 
import "../../clonePage/resource/css/slick-theme.css";

import '../../../../../resource/css/common.css';
import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

import Smaple from '../resource/img/sample.gif';

const NormalSlick2 = () => {
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className= 'prev_btns'
            style={{ ...style, display: 'block',top: -48 , right: 50, width: 50, height: 48, fontSize: 18 }}
            onClick={onClick}
            />
          );
        }
        const NextArrow = (props) => {
          const { className, style, onClick } = props;
          return (
            <div
              className='next_btns'
              style={{ ...style, display: 'block', top: -48, right: 0, width: 50, height: 48, fontSize: 18 }}
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
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="">
                            
                        </a>
                        <a href="" title="" rel="">
                            
                        </a>
                    </li>
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="">
                            
                        </a>
                        <a href="" title="" rel="">
                            
                        </a>
                    </li>
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="">
                            
                        </a>
                        <a href="" title="" rel="">
                            
                        </a>
                    </li>
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="">
                            
                        </a>
                        <a href="" title="" rel="">
                            
                        </a>
                    </li>
              </Slider>
          </>
      )
  }
  

export default NormalSlick2;