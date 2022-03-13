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
            style={{ ...style, display: 'block',top: -48 , right: 50, width: 50, height: 47, fontSize: 18 }}
            onClick={onClick}
            />
          );
        }
        const NextArrow = (props) => {
          const { className, style, onClick } = props;
          return (
            <div
              className='next_btns'
              style={{ ...style, display: 'block', top: -48, right: 0, width: 50, height: 47, fontSize: 18 }}
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
          autoplay: false,
          prevArrow: <PrevArrow/>,
          nextArrow: <NextArrow/>
      };
      return(
          <>
              <Slider {...settings}>
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="" className='flex'>
                          <div className={prtl.reg_dt}>
                            <div className={prtl.year_mon}>2022.03</div>
                            <div className={prtl.day}>01</div>
                          </div>
                          <div className={prtl.tit}>
                            <div className={prtl.contents}>권익지식 이음터 글 목록 샘플입니다.</div>
                            <div className={`${prtl.icons} flex`}>
                              <div className={prtl.like}><i className="xi-thumbs-up"></i>2</div>
                              <div className={prtl.cmt}><i className="xi-message"></i>1</div>
                              <div className={prtl.slt_cmt}><i className="xi-crown"></i>2</div>
                            </div>
                          </div>
                        </a>
                        <a href="" title="" rel="" className='flex'>
                          <div className={prtl.reg_dt}>
                            <div className={prtl.year_mon}>2022.03</div>
                            <div className={prtl.day}>30</div>
                          </div>
                          <div className={prtl.tit}>
                            <div className={prtl.contents}>권익지식 이음터 글 목록 샘플입니다.권익지식 이음터 글 목록 샘플입니다.</div>
                            <div className={`${prtl.icons} flex`}>
                              <div className={prtl.like}><i className="xi-thumbs-up"></i>13</div>
                              <div className={prtl.cmt}><i className="xi-message"></i>10</div>
                              <div className={prtl.slt_cmt}><i className="xi-crown"></i>3</div>
                            </div>
                          </div> 
                        </a>
                    </li>
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="" className='flex'>
                          <div className={prtl.reg_dt}>
                            <div className={prtl.year_mon}>2022.02</div>
                            <div className={prtl.day}>01</div>
                          </div>
                          <div className={prtl.tit}>
                            <div className={prtl.contents}>권익지식 이음터 글 목록 샘플입니다.</div>
                            <div className={`${prtl.icons} flex`}>
                              <div className={prtl.like}><i className="xi-thumbs-up"></i>2</div>
                              <div className={prtl.cmt}><i className="xi-message"></i>1</div>
                              <div className={prtl.slt_cmt}><i className="xi-crown"></i>2</div>
                            </div>
                          </div>
                        </a>
                        <a href="" title="" rel="" className='flex'>
                          <div className={prtl.reg_dt}>
                            <div className={prtl.year_mon}>2022.02</div>
                            <div className={prtl.day}>30</div>
                          </div>
                          <div className={prtl.tit}>
                            <div className={prtl.contents}>권익지식 이음터 글 목록 샘플입니다.권익지식 이음터 글 목록 샘플입니다.</div>
                            <div className={`${prtl.icons} flex`}>
                              <div className={prtl.like}><i className="xi-thumbs-up"></i>13</div>
                              <div className={prtl.cmt}><i className="xi-message"></i>10</div>
                              <div className={prtl.slt_cmt}><i className="xi-crown"></i>3</div>
                            </div>
                          </div> 
                        </a>
                    </li>
                    <li className={prtl.knw_slide}>
                        <a href="" title="" rel="" className='flex'>
                          <div className={prtl.reg_dt}>
                            <div className={prtl.year_mon}>2022.01</div>
                            <div className={prtl.day}>01</div>
                          </div>
                          <div className={prtl.tit}>
                            <div className={prtl.contents}>권익지식 이음터 글 목록 샘플입니다.</div>
                            <div className={`${prtl.icons} flex`}>
                              <div className={prtl.like}><i className="xi-thumbs-up"></i>2</div>
                              <div className={prtl.cmt}><i className="xi-message"></i>1</div>
                              <div className={prtl.slt_cmt}><i className="xi-crown"></i>2</div>
                            </div>
                          </div>
                        </a>
                        <a href="" title="" rel="" className='flex'>
                          <div className={prtl.reg_dt}>
                            <div className={prtl.year_mon}>2022.01</div>
                            <div className={prtl.day}>30</div>
                          </div>
                          <div className={prtl.tit}>
                            <div className={prtl.contents}>권익지식 이음터 글 목록 샘플입니다.권익지식 이음터 글 목록 샘플입니다.</div>
                            <div className={`${prtl.icons} flex`}>
                              <div className={prtl.like}><i className="xi-thumbs-up"></i>13</div>
                              <div className={prtl.cmt}><i className="xi-message"></i>10</div>
                              <div className={prtl.slt_cmt}><i className="xi-crown"></i>3</div>
                            </div>
                          </div> 
                        </a>
                    </li>
              </Slider>
          </>
      )
  }
  

export default NormalSlick2;