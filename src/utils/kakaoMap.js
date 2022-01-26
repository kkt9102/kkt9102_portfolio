/* global kakao */
import React, { useEffect } from "react";
import { CustomMarker, MapMark } from "../pages/portsolio/reserve/components/map_mark";

const Map=()=>{

  useEffect(()=>{
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 7
    };
    const map = new kakao.maps.Map(container, options);
   
  const imageSrc = "../pages/portfolio/reserve/resource/img/map_mark.png";
  const imageSize = new kakao.maps.Size(30,44);
  // 마커 위에 커스텀오버레이를 표시합니다
  // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
  // 지도에 마커를 표시합니다
  
  MapMark.forEach((reserve) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(reserve.lat, reserve.lng)
      });
      new kakao.maps.Marker({
          image: imageSrc
      })
  })
  
  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
      return function () {
          infowindow.open(map, marker);
      };
  }
  
  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
      return function () {
          infowindow.close();
      };
  }
  
    }, [])


    return (
        <div>
        	<div id="map" style={{width:"100%", height:"720px"}}></div> 
        </div>
    )
}

    export default Map;