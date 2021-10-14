import React from 'react';
import { Map } from 'react-kakao-maps-sdk'
import KakaoMap from '../KakaoContainer/KakaoMap/KakaoMap';
import * as S from './styles'

const MainMap = () => {
  return (
    <>
      <S.Wrapper >
        <KakaoMap />
      </S.Wrapper>
    </>
  );
}

export default MainMap;