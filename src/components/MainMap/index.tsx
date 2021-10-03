import React from 'react';
import { Map } from 'react-kakao-maps-sdk'
import KakaoMap from '../KakaoContainer/KakaoMap/KakaoMap';
import * as S from './styles'

const MainMap = () => {
  return (
    <>
      <S.Warpper >
        <KakaoMap />
      </S.Warpper>
    </>
  );
}

export default MainMap;