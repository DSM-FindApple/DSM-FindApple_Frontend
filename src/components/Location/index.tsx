import React, { useEffect, useRef } from 'react'
import KakaoMap from '../KakaoContainer/KakaoMap'
import KakaoMarker from '../KakaoContainer/KakaoMarker'

const markerdata = [
    {
      title: "대전역",
      lat: 36.33248155546412,
      lng: 127.4342002693787,
    },
    {
      title: "천리집",
      lat: 36.39496683963465,
      lng: 127.35156630094322,
    },
    {
      title: "감동헤어",
      lat: 36.38941522030629,
      lng: 127.34884929417515,
    },
  ];
  
const Location = () => {

    useEffect(() => {
        mapscript();
      }, []);
      const {kakao} = window;
    
      const mapscript = () => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(36.39155703543644, 127.3633693928144),
          level: 6,
        };
    
        //map
        const map = new kakao.maps.Map(container, options);
        
        markerdata.forEach((el) => {
          // 마커를 생성합니다
          new kakao.maps.Marker({
            //마커가 표시 될 지도
            map: map,
            //마커가 표시 될 위치
            position: new kakao.maps.LatLng(el.lat, el.lng),
            //마커에 hover시 나타날 title
            title: el.title,
          });
        });
      };

      return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;

}

export default Location;
