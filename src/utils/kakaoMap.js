/* global kakao */
import React, { useEffect } from "react";
import { MapMark } from "../pages/portsolio/reserve/components/map_mark";

const Map=()=>{

  useEffect(()=>{
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 7
    };
    const map = new kakao.maps.Map(container, options);
   
  const imageSrc = "https://kkt9102.github.io/img1/blog/article/portfolio/reserve/pin_reserve.png";
  const imageSize = new kakao.maps.Size(30,44);
  // 마커 위에 커스텀오버레이를 표시합니다
  // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
  // 지도에 마커를 표시합니다
  
//   MapMark.forEach((reserve) => {
//       new kakao.maps.Marker({
//         map: map,
//         position: new kakao.maps.LatLng(reserve.lat, reserve.lng)
//       });
//   })
  for (var i = 0; i < MapMark.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(30, 44);
      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(MapMark.lat, MapMark.lng), // 마커의 위치
          image: markerImage // 마커 이미지
      });
      const iwRemoveable = true;
  
      const infowindow = new kakao.maps.InfoWindow({
          content: MapMark[i].content,
          removable: iwRemoveable
      });
      kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
      );
     
  }
  
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