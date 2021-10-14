import React, { FC, useState } from 'react';
import { CustomOverlayMap, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { marker } from '../../../assets';
import { InfoMarker } from './InfoMarker';

interface Props {
  lat: number,
  lng: number,
  index: number,
  title: string,
}

  const KakaoMarker: FC<Props> = ({lat, lng, index, title}) => {
    const map = useMap()
    const [ isShow, setIsShow ] = useState<boolean>(false)
    const [ sizeData, setSizeData ] = useState({width: 49, height: 54})

    const onOpenOverView = () => {
      setIsShow(true)
      setSizeData({width: 0, height: 0})
    }

    const onClosrOverView = () => {
      setIsShow(false)
      setSizeData({width: 49, height: 54})
    }

    return (
      <>
      <MapMarker
        image={{
          src: `${marker}`, // 마커이미지의 주소입니다
          size: {
            width: sizeData.width,
            height: sizeData.height,
          }, // 마커이미지의 크기입니다
          
        }}

        position={{
          lat: lat,
          lng: lng,
        }}
        onClick={onOpenOverView}
      />
      {
        isShow &&
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
          // 커스텀 오버레이가 표시될 위치입니다
          position={{
            lat: lat,
            lng: lng,
          }}
          yAnchor={1}
        >
          <InfoMarker onClosrOverView={() => onClosrOverView()}/>
        </CustomOverlayMap>
      }
      </>
    )
  }


export default KakaoMarker;