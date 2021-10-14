import React from 'react';
import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import KakaoMarker from '../KakaoMarker/KakaoMarker';

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
    {
      title: "대덕대학교",
      lat: 36.390919558287464, 
      lng: 127.36545386937999,
    },
    {
      title: "금성초 병설",
      lat: 36.391286658188996, 
      lng: 127.34983550570026, 
    },
  ];

const KakaoMap = () => {
    const [ seleteMarker ,setSeleteMarker ] = useState<number>()

    return (
        <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.39155703543644, 
          lng: 127.3633693928144,
        }}
        style={{
          // 지도의 크기
          width: "100vw",
          height: "100vh",
        }}
        level={3} // 지도의 확대 레벨
        >
            {
                markerdata.map((data, index) => (
                    <>
                        <KakaoMarker 
                            lat={data.lat} 
                            lng={data.lng} 
                            index={index}
                            title={data.title}
                            key={`EventMarkerContainer-${data.lat}-${data.lng}`}
                        />
                    </>
                ))
            }
        </Map>
        
    )
}

export default KakaoMap;