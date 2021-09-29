import React, { FC, useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

  const KakaoMarker = ({lat, lng, index, onClick, title,isClick}: any) => {
    const map = useMap()

    return (
      <MapMarker
        position={{lat: lat, lng: lng}} // 마커를 표시할 위치
        onClick={onClick}
        title={title}
      ></MapMarker>
    )
  }


export default KakaoMarker;