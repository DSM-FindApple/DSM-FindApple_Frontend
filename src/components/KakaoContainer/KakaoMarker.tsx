import React, { FC } from 'react';

interface Props {
    position: { title: string; lat: number; lng: number; }
}

const markerdata = [
    {
      title: "콜드스퀘어",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "하남돼지집",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "수유리우동",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "맛닭꼬",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
  ];

const KakaoMarker = () => {
    const { kakao } = window;

    const markerPosition = new kakao.maps.LatLng(markerdata); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    return ( marker )
}

export default KakaoMarker;