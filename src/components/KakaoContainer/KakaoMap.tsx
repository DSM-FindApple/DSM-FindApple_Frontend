import React from 'react';

const KakaoMap = () => {
    const { kakao } = window;
    const mapDiv = document.querySelector('#map')
    const options = {
        center: new kakao.maps.LatLng(37.62197524055062, 127.16017523675508),
        level: 2,
    };
    const map = new kakao.maps.Map(mapDiv, options);
    return (map);
}

export default KakaoMap;