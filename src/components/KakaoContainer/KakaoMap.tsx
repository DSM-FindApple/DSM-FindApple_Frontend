import React from 'react';
import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import KakaoMarker from './KakaoMarker';

// const positions = [
//     {
//       title: "카카오",
//       latlng: { lat: 33.450705, lng: 126.570677 },
//     },
//     {
//       title: "생태연못",
//       latlng: { lat: 33.450936, lng: 126.569477 },
//     },
//     {
//       title: "텃밭",
//       latlng: { lat: 33.450879, lng: 126.56994 },
//     },
//     {
//       title: "근린공원",
//       latlng: { lat: 33.451393, lng: 126.570738 },
//     },
//   ]

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
                            onClick={() => setSeleteMarker(index)}
                            isClick={seleteMarker === index}
                            key={`EventMarkerContainer-${data.lat}-${data.lng}`}
                        ></KakaoMarker>
                        {
                            console.log(data)
                        }
                    </>
                ))
            }
        </Map>
        
    )
}

export default KakaoMap;